let mongoose = require('mongoose'),
  plmongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

userSchema.plugin(plmongoose);
module.exports = mongoose.model('User', userSchema);
