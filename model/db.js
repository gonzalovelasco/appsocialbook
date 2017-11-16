const config = require('config');
const dbConfig = config.get('dbConfig');
const mongoose = require('mongoose');

const connectionString = `mongodb://${dbConfig.user}:${dbConfig.pass}@${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mongo',{ useMongoClient: true })
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));
