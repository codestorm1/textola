var ctrl = require('../api_server/controllers/main');

module.exports = function (app) {
  app.get('/api/', ctrl.index);
};

