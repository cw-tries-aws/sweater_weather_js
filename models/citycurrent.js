var fetch = require('node-fetch')
var pry = require('pryjs');
require('dotenv').config()

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

  const currentUrl1 = `https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET_KEY}/`
  const currentUrl2 = `?exclude=daily,minutely,hourly,alerts,flags`

  CityCurrent.createCurrentData = (cityData,cityId) => {
    const latLong = cityData.latitude + ',' + cityData.longitude
    if (cityData.latitude) {
      return fetch(currentUrl1 + latLong + currentUrl2)
      .then(response => {
        if (response.ok) {
          return response.json();}
          throw new Error('Request Failed.');},
          networkError => console.log(networkError.message))
          .then(json => {
            let data = json["currently"];
            let returnData = {
              temp: data["temperature"],
              apparent: data["apparentTemperature"],
              icon: data["icon"],
              cloudCover: data["cloudCover"],
              humidity: data["humidity"],
              visibility: data["visibility"],
              uvIndex: data["uvIndex"],
              windSpeed: data["windSpeed"],
              windDirection: data["windBearing"],
              summary: data["summary"],
              CityId: cityId
            };
            return CityCurrent.create(returnData)
          })
          .catch((error) => {
            console.log(error)
          })
    }
    else {
      return null
    }
  };


  return CityCurrent;
};
