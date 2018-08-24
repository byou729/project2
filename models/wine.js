module.exports = function(sequelize, DataTypes) {
  var Wine = sequelize.define("Wine", {
    wtype: DataTypes.STRING,
    wmajorcat: DataTypes.STRING
  });
  Wine.associate = function(models) {
    Wine.belongsToMany(models.Food, {
      through: models.Join,
      foreignKey: "wine_key",
      through: models.Join
    });
  };
  return Wine;
};
