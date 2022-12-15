const clientSchema = require('./clientModel');
const { hash } = require('bcrypt');
const { createHmac } = require('node:crypto');


exports.ClientCreator = async (request, response) => {
  try{
    const client = request.body;
    
    const secret = (client.client_name + "secret");    
    const encryptedSecret = createHmac('sha256', secret).digest('hex');    
    const hashSecret = await hash(encryptedSecret, 10);
  
    const newClient = await clientSchema.create({
      name: client.client_name,
      client_id: client.client_id,
      client_secret: hashSecret,
      grant_type: client.grant_type
    });
  
    return response.json({
      client_id: newClient.client_id,
      client_secret: encryptedSecret 
    });

  }catch (error) {
    return response.status(400).send(error.message);
  }
}