const clientSchema = require('./clientModel');
const { hash } = require('bcrypt');
const { createHmac } = require('node:crypto');


exports.ClientCreator = async (request, response) => {
  const client = request.body;
  const secret = (client.name + "secret");
  const encryptedSecret = createHmac('sha256', secret).digest('hex');
  const hashSecret = await hash(encryptedSecret, 10);

  const newClient = await clientSchema.create({
    name: client.client_name,
    client_id: client.client_id,
    client_secret: hashSecret
  });

  return response.json({
    client_id: newClient.client_id,
    client_secret: encryptedSecret 
  });
}