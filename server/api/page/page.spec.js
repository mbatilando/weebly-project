'use strict';

var should = require('should'),
    app = require('../../app'),
    request = require('supertest'),
    Page = require('./page.model'),
    assert = require('assert'),
    User = require('../user/user.model');

describe('Page API Functional Tests', function () {
  var createdId;

  before(function (done) {
    User.create({ name: 'TestName', api_key: 'TestApiKey'}, function (err) {
      Page.create({ name: 'TestPage' }, function (err, page) {
        createdId = page._id;
        done();
      })
    });
  });

  after(function (done) {
    User.findOne({ name: 'TestName', api_key: 'TestApiKey' }, function (err, user) {
      if (err) { console.log(err) }
      user.remove(function (err) {
        if (err) { console.log(err); };
        done();
      });
    });
  });

  describe('GET /api/pages', function() {
    it('should respond with a JSON array with valid credentials', function(done) {
      request(app)
        .get('/api/pages')
        .set('Cookie', ['user=TestName', 'api_key=TestApiKey'])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.be.instanceof(Array);
          done();
        });
    });

    it('should respond with a 404 with invalid credentials', function(done) {
      request(app)
        .get('/api/pages')
        .set('Cookie', ['user=WrongTestName', 'api_key=TestApiKey'])
        .expect(404)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });

  describe('GET /api/pages/:id', function () {
    it ('should respond with a JSON with valid credentials', function(done) {
      request(app)
        .get('/api/pages/'+createdId)
        .set('Cookie', ['user=TestName', 'api_key=TestApiKey'])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.be.instanceof(Object);
          done();
        });
    });

    it ('should respond with a 404 with invalid credentials', function(done) {
      request(app)
        .get('/api/pages/'+createdId)
        .set('Cookie', ['user=WrongTestName', 'api_key=TestApiKey'])
        .expect(404)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });

  describe('PUT /api/pages/:id', function () {
    it ('should update a page with valid credentials', function(done) {
      request(app)
        .put('/api/pages/'+createdId)
        .type('json')
        .send({ "name": "NewTestPage" })
        .set('Cookie', ['user=TestName', 'api_key=TestApiKey'])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          assert.equal(res.body.name, 'NewTestPage');
          res.body.should.be.instanceof(Object);
          done();
        });
    });

    it ('should respond with a 404 with invalid credentials', function(done) {
      request(app)
        .put('/api/pages/'+createdId)
        .type('json')
        .send({ "name": "NewTestPage" })
        .set('Cookie', ['user=WrongTestName', 'api_key=TestApiKey'])
        .expect(404)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });

  describe('POST /api/pages/', function () {
    it ('should create a page with valid credentials', function(done) {
      request(app)
        .post('/api/pages/')
        .type('json')
        .send({ "name": "NewlyCreatedPage" })
        .set('Cookie', ['user=TestName', 'api_key=TestApiKey'])
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          assert.equal(res.body.name, 'NewlyCreatedPage');
          res.body.should.be.instanceof(Object);
          done();
        });
    });

    it ('should respond with a 404 with invalid credentials', function(done) {
      request(app)
        .post('/api/pages/'+createdId)
        .type('json')
        .send({ "name": "NewTestPage" })
        .set('Cookie', ['user=WrongTestName', 'api_key=TestApiKey'])
        .expect(404)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
});