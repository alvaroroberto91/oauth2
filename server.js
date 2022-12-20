require('dotenv').config();
const express = require('express');
const routes = require('./routes/router');
const { mongoose } = require('mongoose');
mongoose.set('strictQuery', true);

const dbURL = 'mongodb://root:root@localhost:27017/admin';

mongoose.connect(dbURL);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {console.log("Server is Running")})