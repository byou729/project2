var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/wines", function(req, res) {
    Wines.findAll({}).then(function() {
      console.log(Wines);
      res.json(Wines);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Wines.create(req.body).then(function(dbWine) {
      res.json(dbWine);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Wines.destroy({ where: { id: req.params.id } }).then(function(dbWine) {
      res.json(dbWine);
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
};
