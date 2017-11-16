// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const path = require('path');
const config = require('config');
const db = require('./model/db');
// Configure port
const port = config.app.port;

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

let book = require('./routes/book');

app.use('/api/user', book);

// Routing
//router.get('/api', (request, response) => {
//    response.status(200).send({message: 'API'})
//});


//Set app to use express backend router
app.use(router);

// Listen to port
app.listen(port);
console.log(`Server is running on port: ${port}`);
