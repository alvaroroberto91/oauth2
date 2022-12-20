const fs = require('fs');

exports.SecretGenerate = async () => {
  const RSA_PRIVATE_KEY = fs.readFileSync(__dirname +'/jwtRS256.key');

  return RSA_PRIVATE_KEY;
}