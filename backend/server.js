const express = require('express');

const port = process.env.PORT || 4201;
const env = process.env.NODE_ENV || "development";

module.exports = (db) => {
  const app = express();

  app.set('port', port);
  app.set('env', env);

  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  });

  const router = express.Router();

  router.get('/', (req, res) => {
    res.json({
      health: 200,
      db
    });
  });

  app.use('/', router);

  const server = app.listen(app.get('port'), () => {
    console.log('\x1b[33m%s\x1b[0m', `➝ Workflow API's server is listening on port ${app.get('port')}`);
  });

  return server;
}
