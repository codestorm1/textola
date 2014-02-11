
//exports.index = function(req, res) {
//  res.json({"hello" : "world"});
//};

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  User = mongoose.model('User');

/**
 * Create user
 */
exports.create = function(req, res) {
  var user = new User(req.body);

  user.provider = 'local';
  user.save(function(err) {
    if (err) {
      res.json({errors :  err.errors,
        user: user});
    }
    res.json({"response" : "hello world"});
  });
};

/**
 * Send User
 */
exports.me = function(req, res) {
  res.json({"response" : "hello me"});
  return;
  res.jsonp(req.user || null);
};

/**
 * Find user by id
 */
exports.user = function(req, res, next, id) {
  User
    .findOne({
      _id: id
    })
    .exec(function(err, user) {
      if (err) return next(err);
      if (!user) return next(new Error('Failed to load User ' + id));
      req.profile = user;
      next();
    });
};
