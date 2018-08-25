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
      through: models.Join,
      foreignKey: "meat_id"
    });
  
   Wines.hasMany(models.Vegetable, {
    through: models.Join,
      foreignKey: "vegetable_id"  
  });
  Wines.hasMany(models.Fruits, {
    through: models.Join,
    foreignKey: "fruits_id" 
  });
  Wines.hasMany(models.Dairy, {
    through: models.Join,
    foreignKey: "dairy_id" 
  });
};
  return Wines;
  };
 

