'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    boatId: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
    comment.belongsTo(models.boat)
  };
  return comment;
};