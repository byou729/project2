module.exports = function(sequelize, DataTypes) {
  var Join = sequelize.define("Join", {
    food_key: DataTypes.INTEGER,
    wine_key: DataTypes.INTEGER
  });
  return Join;
};
