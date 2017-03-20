'use strict'

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var JokeSchema = new Schema({
  joke: {type:String, required: true, min:5},
  category: Array,
  reference: {
    author: String,
    link: String
  },
  lastEdited: Date
});


let JokeModel= mongoose.model("Joke",JokeSchema);
module.exports = JokeModel;


