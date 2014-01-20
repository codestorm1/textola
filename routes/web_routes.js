var ctrl = require('../web_server/controllers/main');

module.exports = function (app) {
  app.get('/', ctrl.index);
};

