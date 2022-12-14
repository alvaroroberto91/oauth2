const { sign } = require('jsonwebtoken');
const clientSchema = require('./clientModel');
const { compare } = require('bcrypt');

exports.TokenGenerator = async (request, response) => {
  const client = request.body
  const findClient = await clientSchema.findOne({client_id: client.client_id});
  console.log(findClient)
  if(!findClient) {
    return res.send("Cliente não existe");
  }

  const secretMatches = await compare(client.client_secret, findClient.client_secret);
  if(!secretMatches) {
    res.send("Chave secreta do cliente é inválida")
  }

  const token = sign({client}, "019acc25a4e242bb55ad489832ada12d", {
    subject: findClient.name,
    expiresIn: "1d"
  });

  return response.json({
    access_token: token,
    expires_in: "1 Dia",
    type: "Bearer"
  });
}