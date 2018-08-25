module.exports = function(sequelize, DataTypes) {
  var Sweets = sequelize.define("Sweets", {
    foodName: DataTypes.STRING,
    foodCategory: DataTypes.STRING,
    perfectPair: DataTypes.STRING,
    wine_id: DataTypes.INTEGER
  });
  Sweets.associate = function(models) {
    Sweets.hasMany(models.Wines, {
      foreignKey: "wine_id"
    });
  };
  return Sweets;
};