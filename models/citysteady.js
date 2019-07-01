'use strict';
var fetch = require('node-fetch')
var pry = require('pryjs');
require('dotenv').config()
var Day = require('../models').Day;

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

  const steadyUrl = `https://weather.cit.api.here.com/weather/1.0/report.json?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg&product=forecast_astronomy&name=`

  CitySteady.createSteadyData = (cityData,cityId) => {
    const fullCity = cityData.name + ',' + cityData.state
    return fetch(steadyUrl + fullCity)
    .then(response => {
      if (response.ok) {
        return response.json();}
      throw new Error('Request Failed.');},
      networkError => console.log(networkError.message))
      .then(json => {
        Day.findOne({
          where: {
            date: json["astronomy"]["astronomy"][1]["utcTime"].substring(0,10)
          }
        })
        .then(day1 => {
          let start = day1["dataValues"]["id"]
          let returnData = {}
          for (var i = start; i < (start + 6); i ++) {
            returnData[json["astronomy"]["astronomy"][i-1]["utcTime"]] = {
              sunrise: json["astronomy"]["astronomy"][i-1]["sunrise"],
              sunset: json["astronomy"]["astronomy"][i-1]["sunset"],
              moonPhase: json["astronomy"]["astronomy"][i-1]["moonPhase"],
              phaseDescription: json["astronomy"]["astronomy"][i-1]["moonPhaseDesc"],
              phaseIcon: json["astronomy"]["astronomy"][i-1]["iconName"],
              cityId: cityId,
              dayId: i
            }
          }
          return returnData
        })
      })
      .then(data => {
        CitySteady.create(data)
      })
      .catch((error) => {
        console.log(error)
      })
    };

  return CitySteady;
};
