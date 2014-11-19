'use strict';

var should = require('should'),
    app = require('../../app'),
    request = require('supertest'),
    User = require('./user.model'),
    assert = require('assert');

describe('User Model Unit Tests', function () {
  beforeEach(function (done) {
    User.create({ name: 'TestName', api_key: 'TestApiKey'});
    done();
  });

  afterEach(function (done) {
    User.findOne({ name: 'TestName', api_key: 'TestApiKey' }, function (err, user) {
      if (err) { console.log(err) }
      user.remove(function (err) {
        if (err) { console.log(err); };
        done();
      });
    });
  });

  describe('.validateApiKey', function () {
    it('result.authenticated should be true if username and apiKey matches', function (done) {
      User.validateApiKey('TestName', 'TestApiKey', function (result) {
        assert.equal(true, result.authenticated);
        done();
      });
    });

    it('result.user should return a JSON object', function (done) {
      User.validateApiKey('TestName', 'TestApiKey', function (result) {
        result.user.should.be.instanceof(Object);
        done();
      });
    });

    it('result.authenticated should be false if apiKey does not match', function (done) {
      User.validateApiKey('TestName', 'WrongApiKey', function (result) {
        assert.equal(false, result.authenticated);
        done();
      });
    });

    it('result.authenticated should be false if username does not match', function (done) {
      User.validateApiKey('WrongName', 'TestApiKey', function (result) {
        assert.equal(null, result.user);
        done();
      });
    });
  });
});


// describe('GET /api/users', function() {

//   it('should respond with JSON array', function(done) {
//     request(app)
//       .get('/api/users')
//       .expect(200)
//       .expect('Content-Type', /json/)
//       .end(function(err, res) {
//         if (err) return done(err);
//         res.body.should.be.instanceof(Array);
//         done();
//       });
//   });
// });