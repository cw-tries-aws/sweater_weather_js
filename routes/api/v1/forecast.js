var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')
require('dotenv').config()


var City = require('../../../models').City;
// var CitySteady = require('../../../models').CitySteady;
// var CityCurrent = require('../../../models').CityCurrent;
// var CityDays = require('../../../models').CityDays;


const latUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=`
const latKey = `&key=${process.env.GOOGLE_SECRET_KEY}`

const getCityData = (input) => {
  return fetch(latUrl + input + latKey)
  .then(response => {
    if (response.ok) {
      return response.json();}
    throw new Error('Request Failed.');},
    networkError => console.log(networkError.message))
  .then(json => {
    let address = json["results"][0]["formatted_address"];
    let geodata = json["results"][0]["geometry"]["location"];
    let cityData = {
      name: address.split(", ")[0],
      state: address.split(", ")[1],
      country: address.split(", ")[2],
      lat: geodata["lat"],
      long: geodata["lng"]
    }
    // console.log(cityData)
    return cityData
  })
  .catch((error) => {
    console.log(error)
  })
};





// console.log(getCityData(input)
//   .then(cityData => {
//     fetc(`cityData`)
//     USE THIS FOR NEXT FETCH CALL)
// )

// const steadyUrl = `https://weather.cit.api.here.com/weather/1.0/report.json?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg&product=forecast_astronomy&name=${city}`

// const currentUrl1 = `https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET_KEY}/${city.coordinates}`
// const currentUrl2 = `?exclude=daily,minutesly,hourly,alerts,flags`
//
// const forecastUrl1 = `https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET_KEY}/${city.coordinates}`
// const forecastUrl2 = `?exclude=currently,minutesly,hourly,alerts,flags&time=${new Date()}`


const getNewData = (cityData,type,url1,url2) => {
  const latLong = cityData.lat + ',' + cityData.long
  const fullCity = cityData.name + ',' + cityData.state
  if (type === 'latlong') {
    fetch(url1 + latLong + url2)
    .then(response => response.json())
    .then(json => {
      return json
    });
  }
  else {
    fetch(url1 + fullCity)
    .then(response => response.json())
    .then(json => {
      return json
    });
  }
};

const getNewCityAll = (cityData) => {
  const test = getNewData(cityData,steadies,steadyUrl)
  var pry = require('pryjs'); eval(pry.it);
  getNewData(cityData,latlong,currentUrl1,currentUrl2)
  getNewData(cityData,latlong,forecastUrl1,forecastUrl2)
  // steadies: getNewData(id,steadyUrlFull), ["astronomy"]["astronomy"]
  // current: getNewData(id,currentUrlFull),
  // forecast: getNewData(id,forecastUrlFull)
};

var pry = require('pryjs'); eval(pry.it);

router.get("/", function(req,res,next) {
//   const cityData = getCityData(req.query.location)
//   const forecastCity = City.FindAll({
//     where: {
//       name: cityData["name"],
//       state: cityData["state"]
//     }
//   })
//     .then(result => result.json())
//     .then(json => {
//       return json
//     })
//
//   const cityId = forecastCity["dataValues"]["id"]
//   if (forecastCity) {
//     res.setHeader("Content-Type", "application/json");
//     res.status(201).send({
//         getNewCityAll(forecastCity.id)
// });
//   }
//     else {
//       City.create(cityData)
//     }
//   res.status(201).send("forecastCity");
})

module.exports = router;
