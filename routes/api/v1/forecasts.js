var express = require('express');
var router = express.Router();
var City = require('../../../models').City;
// var CitySteady = require('../../../models').CitySteady;
// var CityCurrent = require('../../../models').CityCurrent;
// var CityDays = require('../../../models').CityDays;

const getLatLong(input) = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}n&key=#{ENV['GOOGLE_SECRET_KEY']}`)
  .then(result => result.json())
  .then(json => {
    const lat = json["results"][0]["location"]["lat"]
    const long = json["results"][0]["location"]["lng"]
    return `${lat},${long}`
  })

const getCityFullName(latLong) = fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLong}&key=#{ENV['GOOGLE_SECRET_KEY']}`)
  .then(result => result.json())
  .then(json => {
    return json["plus_code"]["compound_code"].substring(8)
  })


router.get("/", function(req,res,next) {
  const latLong = getLatLong(req.body.location)
  const cityObject = getCityFullName(latLong)
  City.FindAll({
    where: {
      name: req.body.name,
    }
  })
})
