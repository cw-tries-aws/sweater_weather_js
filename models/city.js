'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    City.hasMany(models.UserCity, {
      foreignKey: "CityId" // for some reason it needs this lowercase
    })
  };
  return City;
};
