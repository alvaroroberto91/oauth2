const { sign } = require('jsonwebtoken');
const clientSchema = require('./clientModel');
const { compare } = require('bcrypt');

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
      throw new Error("Invalid Client Secret");
    }
  
    const token = sign({client}, "019acc25a4e242bb55ad489832ada12d", {
      subject: savedClient.name,
      expiresIn: "900s"
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