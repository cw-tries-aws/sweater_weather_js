var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')


var City = require('../../../models').City;
// var CitySteady = require('../../../models').CitySteady;
// var CityCurrent = require('../../../models').CityCurrent;
// var CityDays = require('../../../models').CityDays;

const latUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=`
const latKey = `&key=${process.env.GOOGLE_SECRET_KEY}`

const steadyUrl = `https://weather.cit.api.here.com/weather/1.0/report.json?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg&product=forecast_astronomy&name=${city}`
const steadyKey = ``

const currentUrl = `https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET_KEY}/${city.coordinates}?exclude=daily,minutesly,hourly,alerts,flags`
const darkSkyKey = ``

const forecasturl = `https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET_KEY}/#{city.coordinates}?exclude=currently,minutesly,hourly,alerts,flags&time=#{Time.now.to_f.round}`

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

const getNewCityForecasts = (id) => {
  // steadies: getNewData(id,steadyUrl),
  // current: getNewData(id,currentUrl),
  // forecast: getNewData(id,forecastUrl)
}

const getNewSteadies = (id) => {
  const city = City.findAll({
    where: {
      id: id
    }
  }).then(result => result.json())
    .then(city => return city);
  fetch(`https://weather.cit.api.here.com/weather/1.0/report.json?name=${city}&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg&product=forecast_astronomy`)
    .then(response => response.json())
    .then(json => {
      return json["results"][0]["astronomy"]["astronomy"]
    });
};

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
  //   res.status(201).send("WORDS");
  // }
    else {
      City.create(cityData)
    }
  // res.status(201).send("forecastCity");
})

module.exports = router;
