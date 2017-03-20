var express = require('express');
var router = express.Router();
let fetch = require("node-fetch");
const PORT = 8080;
const SERVER_URL = `http://localhost:${PORT}`;
const URL = SERVER_URL + "/api/jokes";
var jokes = require("../models/Jokes");

router.get('/', function (req, res, next) {
  res.render('index', { username: req.session.username });
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/users', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/addJoke', function (req, res, next) {
  res.render('add-joke');
});

router.post("/addJoke", function (req, res, next) {
  var joke = req.body.joke;
  //delete and recreate with angual !
  fetch(URL, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(joke)
  }
  ).then(function (response) {
    if (response.status == 200) {
      res.redirect("/");
    } else {
      var err = new Error("Error!");
      err.status = response.status;
      next(err);
    }

  })
});

router.get('/allJokes', function (req, res, next) {
  res.render('all-jokes', { jokes: jokes.allJokes });
});

router.get('/randomJoke', function (req, res, next) {
  res.render('random-joke', { joke: jokes.getRandomJoke });
});

module.exports = router;