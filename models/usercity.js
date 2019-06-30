'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserCity = sequelize.define('UserCity', {
    cityName: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    CityId: DataTypes.INTEGER,
    CityCurrentId: DataTypes.INTEGER
  }, {});
  UserCity.associate = function(models) {
    // this works only without the city and user associations here
  };
  return UserCity;
};
