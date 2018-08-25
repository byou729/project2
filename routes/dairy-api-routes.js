var db = require("../models");

module.exports = function(app) {
 app.get("/api/dairy", function(req, res) {
   // Here we add an "include" property to our options in our findAll query
   // We set the value to an array of the models we want to include in a left outer join
   // In this case, just db.Post
   db.Dairy.findAll({
     include: [db.Wines]
   }).then(function(dbDairy) {
     res.json(dbDairy);
   });
 

 app.get("/api/dairy/:id", function(req, res) {
   // Here we add an "include" property to our options in our findOne query
   // We set the value to an array of the models we want to include in a left outer join
   // In this case, just db.Post
   db.Dairy.findOne({
     where: {
       id: req.params.2,
     },
     include: [db.Wines]
   }).then(function(dbDairy) {
     res.json(db.Dairy);
     console.log(result)
   });
 });
};