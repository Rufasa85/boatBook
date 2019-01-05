'use strict';
module.exports = (sequelize, DataTypes) => {
  var boat = sequelize.define('boat', {
    name: DataTypes.STRING,
    fishery: DataTypes.STRING,
    length: DataTypes.INTEGER,
    crew: DataTypes.INTEGER,
    private: DataTypes.BOOLEAN,
    image: DataTypes.STRING
  }, {});
  boat.associate = function(models) {
    boat.hasMany(models.comment)
  };
  return boat;
};