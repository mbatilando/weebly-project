'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  api_key: String
});

/*
	Checks if username and apiKey match
	Returns {
		authenticated: Boolean,
		user: User
	}
*/
UserSchema.statics.validateApiKey = function (username, apiKey, callback) {
	this.findOne({ name: username }, function (err, user) {
		var authenticated = user.api_key === apiKey ? true : false;
		callback({ authenticated: authenticated, user: user });
	});
};

module.exports = mongoose.model('User', UserSchema);