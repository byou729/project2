var db = require("../models");
var request = require('request');

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Wine.findAll({}).then(function(dbWine) {
      res.json(dbWine);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Wine.create(req.body).then(function(dbWine) {
      res.json(dbWine);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Wine.destroy({ where: { id: req.params.id } }).then(function(dbWine) {
      res.json(dbWine);
    });
  });

  app.get("/api/examples", function(req, res) {
    db.Food.findAll({}).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Food.create(req.body).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Food.destroy({ where: { id: req.params.id } }).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // /api/wines get route to get a wine pairing based on a wine type from spoonacular
  app.post('/api/searchFood', function(req, res){
    // from the req.body.search store it in a search variable
    var userSearch = req.body.search // req.body.search
    // check database first if search is there
      // send database info
    // if not then use request to search the api
      // save the new search to the database
      // send the info
    request(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/pairing?food=${userSearch}`, {
      headers: {
        "X-Mashape-Key": "T5uEkokBhXmsh7XQJzkzFT0dEm3gp1bYwnQjsnVn1IycLWPny6",
        "Accept": "application/json"
      }
    }, function(error, response, body){
        if(error) throw error;
        console.log(body);
        // Save the search to the database
        // send to the front
        res.json(JSON.parse(body));
    }); 
  });
  
  app.post('/api/searchWine', function(req, res){
    var userSearch = req.body.search
    request(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/recommendation?wine=${userSearch}`, {
      headers: {
        "X-Mashape-Key": "T5uEkokBhXmsh7XQJzkzFT0dEm3gp1bYwnQjsnVn1IycLWPny6",
        "Accept": "application/json"
      }
    }, function(error, response, body){
        if(error) throw error;
        console.log(body);
        res.json(JSON.parse(body));
    });
  });

};
