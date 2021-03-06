'use strict';

var _ = require('lodash'),
    Page = require('./page.model'),
    User = require('../user/user.model'),
    cache = require('memory-cache'),
    js2xmlparser = require('js2xmlparser');

// Check if username and api key match
function authenticate (req, res, callback) {
  var cApiKey = cache.get(req.cookies.user);
  if (cApiKey) {
    cApiKey === req.cookies.api_key ? callback(true) : callback(false);
  } else {
    User.validateApiKey(req.cookies.user, req.cookies.api_key, function (result) {
      result.authenticated ? callback(true) : callback(false);
      if (result.user !== null) {
        cache.put(result.user.name, result.user.api_key);
      }
    });
  }
}

function authenticateNoCache (req, res, callback) {
  User.validateApiKey(req.cookies.user, req.cookies.api_key, function (result) {
    result.authenticated ? callback(true) : callback(false);
  });
}

// Get list of pages
exports.index = function(req, res) {
  authenticate(req, res, function (authenticated) {
    if (!authenticated) { return res.send(404); }

    var pages = cache.get('pages');
    if (pages) {
      // console.log('GET /:CACHE HIT');
      return res.json(200, pages);
    } else {
      // console.log('GET /:CACHE MISS');
      Page.find(function (err, pages) {
        if(err) { return handleError(res, err); }
        cache.put('pages', pages);
        return res.json(200, pages);
      });
    }
  });
};

// Get list of pages
exports.nIndex = function(req, res) {
  authenticateNoCache(req, res, function (authenticated) {
    if (!authenticated) { return res.send(404); }
      Page.find(function (err, pages) {
        if(err) { return handleError(res, err); }
        return res.json(200, pages);
      });
  });
};


// Get a single page
exports.show = function(req, res) {
  authenticate(req, res, function (authenticated) {
    if (!authenticated) { return res.send(404); }

    var page = cache.get(req.params.id);
    if (page) {
      if (req.params.optional === 'xml') {
        page = js2xmlparser('page', { '_id': page._id.toString(), 'name': page.name });
        return res.header('Content-Type','text/xml').send(page);
      }
      return res.json(200, page);
    } else {
      // console.log('GET /id:CACHE MISS');
      Page.findById(req.params.id, function (err, page) {
        if(err) { return handleError(res, err); }
        if(!page) { return res.send(404); }
        cache.put(page._id, page);
        if (req.params.optional === 'xml') {
          page = js2xmlparser('page', { '_id': page._id.toString(), 'name': page.name });
          return res.header('Content-Type','text/xml').send(page);
        }
        return res.json(page);
      });
    }
  });
};

// Creates a new page in the DB.
exports.create = function(req, res) {
  authenticate(req, res, function (authenticated) {
    if (!authenticated) { return res.send(404); }

    Page.create(req.body, function(err, page) {
      if(err) { return handleError(res, err); }
      // console.log('POST: CACHING');
      cache.put(page._id, page);
      cache.del('pages');
      return res.json(201, page);
    });
  });
};

// Updates an existing page in the DB.
exports.update = function(req, res) {
  authenticate(req, res, function (authenticated) {
    if (!authenticated) { return res.send(404); }
      if(req.body._id) { delete req.body._id; }
      Page.findById(req.params.id, function (err, page) {
        if (err) { return handleError(res, err); }
        if(!page) { return res.send(404); }
        var updated = _.merge(page, req.body);
        updated.save(function (err) {
          if (err) { return handleError(res, err); }
          // console.log('PUT: CACHING');
          cache.put(page._id, page);
          // console.log('PUT: DELETING ALL PAGES CACHE')
          cache.del('pages');
          return res.json(200, page);
        });
      });
  });
};

// Deletes a page from the DB.
exports.destroy = function(req, res) {
  authenticate(req, res, function (authenticated) {
    if (!authenticated) { return res.send(404); }

    Page.findById(req.params.id, function (err, page) {
      if(err) { return handleError(res, err); }
      if(!page) { return res.send(404); }
      page.remove(function(err) {
        if(err) { return handleError(res, err); }
        // console.log('DELETING CACHED OBJ AND PAGES');
        cache.del(page._id);
        cache.del('pages');
        return res.send(204);
      });
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
};