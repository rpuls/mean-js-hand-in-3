let router = require("express").Router();
var Joke = require('../models/JokeEntity');

router.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});


//get all jokes
router.get('/jokes', function (req, res, next) {
  Joke.find({}, function (err, jokes) {
    if (err) throw err;
    let arr = jokes
    let j = JSON.stringify(arr);
    res.send(j);
  });
});

//get joke by id
router.get('/jokes/:id', function (req, res, next) {
  Joke.findById({ _id: req.params.id }, function (err, joke) {
    if (err) throw err;
    let j = JSON.stringify(joke);
    res.send(j);
  });
});

//add joke 
router.post("/jokes", function (req, res, next) {
  var requestO = req;
  var joke = req.body;
  console.log("dgdfg" + JSON.stringify(joke));
  Joke.create(joke, function (err, joke) {
    if (err) throw err;
    console.log();
    res.json(joke);
  })
});

//update joke option 2
router.put("/jokes/:id", function (req, res, next) {
  var id = req.params.id;
  var joke = JSON.stringify(req.body);
  Joke.findOneAndUpdate({ _id: id }, { joke }, function (err, joke) {
    if (err) throw err;
    console.log(joke);
    res.json(joke);
  });
});

//Delete joke
router.delete('/jokes/:id', function (req, res, next) {
  Joke.findByIdAndRemove(req.params.id, function (err) {
    if (err) throw err;
    console.log('joke successfully removed!');
  });
});


module.exports = router;
