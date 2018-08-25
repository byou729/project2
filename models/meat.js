module.exports = function(sequelize, DataTypes) {
  var Meat = sequelize.define("Meat", {
    foodName: DataTypes.STRING,
    foodCategory: DataTypes.STRING,
    perfectPair: DataTypes.STRING,
    wine_id: DataTypes.INTEGER
  });
  Meat.associate = function(models) {
    Meat.hasMany(models.Wines, {
      foreignKey: "wine_id"
    });
  };
  return Meat;
  
};
