'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserCity = sequelize.define('UserCity', {
    cityName: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    CityId: DataTypes.INTEGER,
    cityCurrentId: DataTypes.INTEGER
  }, {});
  UserCity.associate = function(models) {
    // this works only without the city and user associations here
  };
  return UserCity;
};
