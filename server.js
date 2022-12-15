require('dotenv').config();
const express = require('express');
const routes = require('./routes/router');
const { default: mongoose } = require('mongoose');

const dbURL = 'mongodb://root:root@localhost:27017/admin';

mongoose.connect(dbURL);

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

app.listen(3000, () => {console.log("Server is Running")})