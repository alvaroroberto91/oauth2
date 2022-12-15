const { sign } = require('jsonwebtoken');
const clientSchema = require('./clientModel');
const { compare } = require('bcrypt');
const { SecretGenerate } = require('./utils/secretGenarete');


exports.TokenGenerator = async (request, response) => {
  try {

    const client = request.body
    const savedClient = await clientSchema.findOne({client_id: client.client_id});

    if(!savedClient) {
      throw new Error("Client ID does not exists!");
    }

    if(savedClient.grant_type !== client.grant_type) {
      throw new Error("Grant Type is Invalid!");
    }
  
    const secretMatches = await compare(client.client_secret, savedClient.client_secret);
    if(!secretMatches) {
      throw new Error("Invalid Client Secret!");
    }

    const payload = {
      "iss": "https://integration-service-rededor-brazil.eva.bot/independentMessage",
      "aud": "Send Independent Message",
      "sub": savedClient.name,
      "client_id": savedClient.client_id
    }
    const PRIVATE_KEY = await SecretGenerate();
    const token = sign({payload}, PRIVATE_KEY, {
      expiresIn: '900s',
      algorithm: 'RS256'
    });
  
    return response.json({
      access_token: token,
      expires_in: 900,
      type: "Bearer"
    });

    }catch (error) {
      return response.status(400).send(error.message);
    }
}