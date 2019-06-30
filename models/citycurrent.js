'use strict';
module.exports = (sequelize, DataTypes) => {
  const CityCurrent = sequelize.define('CityCurrent', {
    temp: DataTypes.FLOAT,
    apparent: DataTypes.FLOAT,
    icon: DataTypes.STRING,
    cloudCover: DataTypes.FLOAT,
    humidity: DataTypes.FLOAT,
    visibility: DataTypes.FLOAT,
    uvIndex: DataTypes.FLOAT,
    windSpeed: DataTypes.FLOAT,
    windDirection: DataTypes.FLOAT,
    summary: DataTypes.STRING,
    CityId: DataTypes.INTEGER
  }, {});
  CityCurrent.associate = function(models) {
    // associations can be defined here
  };
  return CityCurrent;
};
