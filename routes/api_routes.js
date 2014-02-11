
module.exports = function (app) {

  //User Routes
  var users = require('../api_server/controllers/users');

  app.get('/api/users/me', users.me);
  //app.get('/api/users/:userId', users.show);
  //app.get('/api', users.index);
//  app.get('/signin', users.signin);
//  app.get('/signup', users.signup);
//  app.get('/signout', users.signout);

  //Setting up the users api
  //app.post('/users', users.create);

};

