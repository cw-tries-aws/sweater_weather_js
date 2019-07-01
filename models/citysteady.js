'use strict';
module.exports = (sequelize, DataTypes) => {
  const CitySteady = sequelize.define('CitySteady', {
    sunrise: DataTypes.STRING,
    sunset: DataTypes.STRING,
    moonPhase: DataTypes.FLOAT,
    phaseDescription: DataTypes.STRING,
    phaseIcon: DataTypes.STRING,
    CityId: DataTypes.INTEGER,
    DayId: DataTypes.INTEGER
  }, {});
  CitySteady.associate = function(models) {
    // associations can be defined here
  };
  return CitySteady;
};
