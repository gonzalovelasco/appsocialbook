const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  create_at: { type: Date, default: Date.now },
});

let User = mongoose.model('User', userSchema);

module.exports = User;
