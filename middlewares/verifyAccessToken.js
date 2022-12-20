const {verify} = require('jsonwebtoken');
const { SecretGenerate } = require('../oauth2-server/utils/secretGenerate/secretGenerate');

exports.VerifyAccessToken = async (request, response, nextFunction) => {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    return response.status(401).json({
      message: "Token is missing!"
    });
  }

  const [,token] = authHeader.split(" ");
  const PRIVATE_KEY = await SecretGenerate();

  try{
    verify(token, PRIVATE_KEY, {algorithms: 'RS256'});
    return nextFunction();
  }catch (error) {
    return response.status(401).json({
      error_type: error.name,
      message: error.message
    });
  }
}