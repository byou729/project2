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
    Wines.belongsTo(models.Meat, {
      foreignKey: "meat_id"
    });
  
   Wines.belongsTo(models.Vegetable, {
      foreignKey: "vegetable_id"  
  });
  Wines.belongsTo(models.Sweets, {
    foreignKey: "sweets_id" 
  });
  Wines.belongsTo(models.Dairy, {
    foreignKey: "dairy_id" 
  });
};
  return Wines;
  };
 

