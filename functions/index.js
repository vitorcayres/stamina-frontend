const express = require('express');
const app = express();
const functions = require('firebase-functions');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
 
const Users = require("./services/Users");

app.use('/users', Users);
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

exports.api = functions.https.onRequest(app);