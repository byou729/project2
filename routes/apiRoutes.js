var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/wines", function(req, res) {
    db.Wines_db.findAll({}).then(function(dbWine_db) {
      res.json(dbWine_db);
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
};
