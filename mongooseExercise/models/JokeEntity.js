var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// {
//   "joke" : " Reality is an illusion created by a lack of alcohol",
//   "category" : ["short", "alcohol", "quote"],
//   "reference": { "author" : "Someone", "link" : ""},
//   "lastEdited" : new Date()
// },

var jokeSchema = new Schema({
  joke: {type:String, required: true, min:5},
  category: Array,
  reference: {
    aauthor: String,
    link: String
  },
  lastEdited: Date
});

var Joke = mongoose.model('Joke', jokeSchema);

// make this available to our users in our Node applications
module.exports = Joke;