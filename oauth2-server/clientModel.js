const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Client = new Schema({
  name: {
    type: String,
  },
  client_id: {
    type: String,
  },
  client_secret: {
    type: String
  },
  grant_type: {
    type: String
  }

});
module.exports = mongoose.model('client', Client);