var express = require('express');
var router = express.Router();
var City = require('../../../models').City;
// var CitySteady = require('../../../models').CitySteady;
// var CityCurrent = require('../../../models').CityCurrent;
// var CityDays = require('../../../models').CityDays;

const getLatLong(input) = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=#{ENV['GOOGLE_SECRET_KEY']}`)
  .then(result => result.json())
  .then(json => {
    const lat = json["results"][0]["location"]["lat"]
    const long = json["results"][0]["location"]["lng"]
    return `${lat},${long}`
  })

const getCityFullName(latLong) = fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLong}&key=#{ENV['GOOGLE_SECRET_KEY']}`)
  .then(result => result.json())
  .then(json => {
    // currently this is only for the U.S.
    let fullString = json["plus_code"]["compound_code"];
    let cityStateString = fullString.substring(8,fullString.length - 5)
    return cityStateString
  })


router.get("/", function(req,res,next) {
  const latLong = getLatLong(req.body.location)
  const cityArray = getCityFullName(latLong).split(', ')
  const forecastCity = City.FindAll({
    where: {
      name: cityArray[0],
      state: cityArray[1]
    }
  })
    .then(result => result.json())
    .then(json => {
      return json
    })

  const cityId = forecastCity["dataValues"]["id"]

  res.setHeader("Content-Type", "application/json");
  res.status(201).send(forecastCity);
})
