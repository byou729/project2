module.exports = function(sequelize, DataTypes) {
    var Vegetable = sequelize.define("Vegetable", {
      foodName: DataTypes.STRING,
      foodCategory: DataTypes.STRING,
      perfectPair: DataTypes.STRING,
      wine_id: DataTypes.INTEGER

    });
    Vegetable.associate = function(models) {
      Vegetable.hasMany(models.Wines, {
        foreignKey: "wine_id"
      
      });
    };
    return Vegetable;
  };