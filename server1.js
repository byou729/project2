require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.JAWSDB_URL || 3306;
//Below for local server
//app.listen(3306);
console.log('3306 is the magic port');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.static("views"));

// Handlebars
//app.engine(
//  "handlebars",
//  exphbs({
 //   defaultLayout: "main"
 // })
//);

//app.set("view engine", "handlebars");

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
  var drinks = [
      { name: 'Red Wine', drunkness: 3 },
      { name: 'White', drunkness: 5 },
      { name: 'Desert', drunkness: 10 },
      { name: 'Rose', drunkess: 15},
  ];
  var tagline = "";

  res.render('pages/index', {
      drinks: drinks,
      tagline: tagline
  });
});

// about page 
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true; // Fine while in development/testing
  //Set to false for production @@
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
   console.log(" Listening on port %s. Visit http://localhost:%s/ in your browser." + PORT);
  });
});

module.exports = app;
