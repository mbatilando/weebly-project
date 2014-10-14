'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  api_key: String
});

module.exports = mongoose.model('User', UserSchema);