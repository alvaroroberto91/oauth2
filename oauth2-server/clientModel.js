const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Client = new Schema({
  name: {
    type: String,
    required: true
  },
  client_id: {
    type: String,
    required: true
  },
  client_secret: {
    type: String,
    required: true
  },
  grant_type: {
    type: String,
    required: true
  }

});
module.exports = mongoose.model('client', Client);