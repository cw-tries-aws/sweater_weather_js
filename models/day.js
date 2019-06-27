'use strict';
module.exports = (sequelize, DataTypes) => {
  const Day = sequelize.define('Day', {
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    date: DataTypes.DATEONLY
  }, {});
  Day.associate = function(models) {
    // associations can be defined here
  };
  return Day;
};