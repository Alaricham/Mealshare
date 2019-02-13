// Comment logic
let mongoose = require('mongoose');
require('dotenv').config()
const mongo = process.env.MONGO

let commentSchema = new mongoose.Schema({
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
  },
  text: String
});

mongoose.connect(mongo);
module.exports = mongoose.model('Commentfeed', commentSchema);
