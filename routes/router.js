const express = require('express');
const routes = express.Router();
const {VerifyAccessToken} = require('../middlewares/verifyAccessToken');
const { ClientCreator } = require('../oauth2-server/clientCreator');
const { createHmac } = require('node:crypto');
const { TokenGenerator } = require('../oauth2-server/tokenGenerator');

routes.get('/', (request, response) => {
  const secret = (request.body.secret);
  const hash = createHmac('sha256', secret).digest('hex');
  response.json({secret: hash});
});

routes.post('/register-client', ClientCreator);

routes.post('/access-token', TokenGenerator);

routes.post('/send-message', VerifyAccessToken, (request, response) => {
  return response.status(200).json({
    message: request.body
  });
});

module.exports = routes;