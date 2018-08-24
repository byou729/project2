module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    food_name: DataTypes.STRING,
    food_category: DataTypes.STRING,
    perfectPair: DataTypes.STRING
  });
  Food.associate = function(models) {
    Food.belongsToMany(models.Wine, {
      foreignKey: "food_key",
      through: models.Join
    });
  };
  return Food;
};
