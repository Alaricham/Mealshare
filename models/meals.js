// Meal logic
let mongoose = require('mongoose');
require('dotenv').config()
const mongo = process.env.MONGO

let mealSchema = new mongoose.Schema({
  name: String,
  image: String,
  ingredients: Array,
  description: String,
  creator: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Commentfeed"
  }
  ]
});

mongoose.connect(mongo);
module.exports = mongoose.model('Meal', mealSchema);
