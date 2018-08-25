module.exports = function(sequelize, DataTypes) {
    var Dairy = sequelize.define("Dairy", {
      foodName: DataTypes.STRING,
      foodCategory: DataTypes.STRING,
      perfectPair: DataTypes.STRING,
      wine_id: DataTypes.INTEGER
    });
    Dairy.associate = function(models) {
      Dairy.hasMany(models.Wines, {
        foreignKey: "wine_id"
      });
    };
    return Dairy;
  };