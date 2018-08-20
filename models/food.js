module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    FBARCODEID: DataTypes.STRING,
    FNAME: DataTypes.STRING,
    FCAT: DataTypes.STRING,
    PERFECTPAIR: DataTypes.STRING,
    OKPAIR: DataTypes.STRING
  });
  Food.associate = function(models) {
    Food.belongsToMany(models.Wine, {
      foreignKey: "food_key",
      through: models.Join
    });
  };
  return Food;
};
