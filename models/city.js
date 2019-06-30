var fetch = require('node-fetch')
var pry = require('pryjs');
require('dotenv').config()

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
      foreignKey: "CityId"
    })
  };

  const latUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=`
  const latKey = `&key=${process.env.GOOGLE_SECRET_KEY}`

  City.getCityData = (input) => {
    return fetch(latUrl + input + latKey)
    .then(response => {
      if (response.ok) {
        return response.json();}
      throw new Error('Request Failed.');},
      networkError => console.log(networkError.message))
    .then(json => {
      return formatCityData(json)
    })
    .catch((error) => {
      console.log(error)
    })
  };

  function formatCityData(json) {
    let address = json["results"][0]["formatted_address"];
    let geodata = json["results"][0]["geometry"]["location"];
    let cityData = {
      name: address.split(", ")[0],
      state: address.split(", ")[1],
      country: address.split(", ")[2],
      latitude: geodata["lat"],
      longitude: geodata["lng"]
    }
    return cityData
  };


  return City;
};
