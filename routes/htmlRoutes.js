var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Wine.findAll({}).then(function(dbWine) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbWine
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Wine.findOne({ where: { id: req.params.id } }).then(function(dbWine) {
      res.render("example", {
        example: dbWine
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
