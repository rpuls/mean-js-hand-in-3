let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let logger = require('morgan');
let api = require("./api/api");
let routes = require("./routes/routes");
let session = require("express-session");
let path = require('path');
app.set("json spaces", 2);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secret_3162735', saveUninitialized: true, resave: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(function (req, res, next) {
  let sess = req.session
  if (sess.username) {
    return next();
  }
  if (req.url.startsWith("/api/")) {
    var err = new Error('Unauthorized');
    err.status = 401;
    return next(err);
  }
  let un = req.body.username
  if (un) {
    sess.username = un;
    return res.redirect("/");
  }
  req.url = "/login";
  next();
});

app.use("/api",api);
app.use("/", routes)

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.error(err.status);
  res.status(err.status || 500);
  res.json({msg: err.message,status: err.status});
})

//Call this to initialize mongoose
function initMongoose(dbConnection){
  require("./db/mongooseConnect")(dbConnection);
}

app.initMongoose = initMongoose;

module.exports = app;


