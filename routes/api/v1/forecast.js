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
  fetch(latUrl + input + latKey)
  .then(response => response.json())
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
    console.log(cityData)
    return cityData
  });
};



const steadyUrl = `https://weather.cit.api.here.com/weather/1.0/report.json?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg&product=forecast_astronomy&name=${city}`

const currentUrl1 = `https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET_KEY}/${city.coordinates}`
const currentUrl2 = `?exclude=daily,minutesly,hourly,alerts,flags`

const forecastUrl1 = `https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET_KEY}/${city.coordinates}`
const forecastUrl2 = `?exclude=currently,minutesly,hourly,alerts,flags&time=${new Date()}`


const getNewData = (id,url) => {
  const city = City.findAll({
    where: {
      id: id
    }
  }).then(result => result.json())
  .then(city => return `${city.name}, ${city.state}`);
  fetch(`url`)
  .then(response => response.json())
  .then(json => {
    return json
  });
}

const getNewCityAll = (id) => {
  const city = City.findAll({
    where: {
      id: id
    }
  }).then(result => result.json())
    .then(city => return city);
  const steadyUrlFull = steadyUrl + city.name + "," + city.state;
  const currentUrlFUll = currentUrl1 + city.lat + "," + city.long + currentUrl2;
  const forecastUrlFUll = forecastUrl1 + city.lat + "," + city.long + forecastUrl2;
  // steadies: getNewData(id,steadyUrlFull), ["astronomy"]["astronomy"]
  // current: getNewData(id,currentUrlFull),
  // forecast: getNewData(id,forecastUrlFull)
}


router.get("/", function(req,res,next) {
  const cityData = getCityData(req.query.location)
  // const forecastCity = City.FindAll({
  //   where: {
  //     name: cityData["name"],
  //     state: cityData["state"]
  //   }
  // })
  //   .then(result => result.json())
  //   .then(json => {
  //     return json
  //   })
  //
  // const cityId = forecastCity["dataValues"]["id"]
  // if (forecastCity) {
  //   res.setHeader("Content-Type", "application/json");
  //   res.status(201).send({
        // getNewCityAll(forecastCity.id)
// });
  // }
    else {
      City.create(cityData)
    }
  // res.status(201).send("forecastCity");
})

module.exports = router;
