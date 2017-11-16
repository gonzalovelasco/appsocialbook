const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
  title: {type: String, required: true},
  img: {type: String, required: true},
  author: {type: String, required: true},
  genre: {type: String, required: true},
  score: { type: Number, default:0 },
});

module.exports = mongoose.model('Book', BookSchema);
