module.exports = function(sequelize, DataTypes) {
  var Wines = sequelize.define("Wines", {
    wtype: DataTypes.STRING,
    wmajorcat: DataTypes.STRING,
    dairy_id: DataTypes.INTEGER,
    meat_id: DataTypes.INTEGER,
    vegetable_id: DataTypes.INTEGER,
    fruits_id: DataTypes.INTEGER
  });
  Wines.associate = function(models) {
    Wines.hasMany(models.Meat, {
      foreignKey: "meat_id"
    });
  
   Wines.hasMany(models.Vegetable, {
      foreignKey: "vegetable_id"  
  });
  Wines.hasMany(models.Sweets, {
    foreignKey: "fruits_id" 
  });
  Wines.hasMany(models.Dairy, {
    foreignKey: "dairy_id" 
  });
};
  return Wines;
  };
 

