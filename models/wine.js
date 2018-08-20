module.exports = function(sequelize, DataTypes) {
  var Wine = sequelize.define("Wine", {
    WBARCODEID: DataTypes.STRING,
    WNAME: DataTypes.STRING,
    WTYPE: DataTypes.STRING,
    WMAJORCAT: DataTypes.STRING
  });
  Wine.associate = function(models) {
    Wine.belongsToMany(models.Food, {
      through: models.Join,
      foreignKey: "wine_key"
    });
  };
  return Wine;
};
