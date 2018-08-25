module.exports = function(sequelize, DataTypes) {
  var Fruits = sequelize.define("Fruits", {
    foodName: DataTypes.STRING,
    foodCategory: DataTypes.STRING,
    perfectPair: DataTypes.STRING,
    wine_id: DataTypes.INTEGER
  });
  Fruits.associate = function(models) {
    Fruits.hasMany(models.Wines, {
      foreignKey: "wine_id"
    });
  };
  return Fruits;
};