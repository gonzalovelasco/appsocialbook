const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookUserSchema = new Schema({
  book: { type: Schema.ObjectId, ref: 'Book', required: true },
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  status: {type: String, required: true, enum: ['Leido', 'Leyendo','Abandonado','Quiero Leer'], default: 'Quiero Leer'},
  score: { type: Number, default:0 },
  seq: { type: Number },
  create_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BookUser', BookUserSchema);
