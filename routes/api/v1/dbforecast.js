var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')
var pry = require('pryjs');
require('dotenv').config()

var User = require('../../../models').User;
var City = require('../../../models').City;
// var CitySteady = require('../../../models').CitySteady;
var CityCurrent = require('../../../models').CityCurrent;
// var CityDays = require('../../../models').CityDays;

const steadyUrl = `https://weather.cit.api.here.com/weather/1.0/report.json?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg&product=forecast_astronomy&name=`


const forecastUrl1 = `https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET_KEY}/`
const forecastUrl2 = `?exclude=currently,minutesly,hourly,alerts,flags&time=${new Date()}`


const getSteadyData = (cityData,url) => {
  const fullCity = cityData.name + ',' + cityData.state
  return fetch(url + fullCity)
  .then(response => {
    if (response.ok) {
      return response.json();}
      throw new Error('Request Failed.');},
      networkError => console.log(networkError.message))
      .then(json => {
        let data = json["astronomy"]["astronomy"][0];
        let returnData = {
          sunrise: data["sunrise"],
          sunset: data["sunset"],
          moonPhase: data["moonPhase"],
          phaseDescription: data["moonPhaseDesc"],
          phaseIcon: data["iconName"]
        }
        return returnData
      })
      .catch((error) => {
        console.log(error)
      })
    };


const getCityDayData = (cityData,url1,url2) => {
  const latLong = cityData.latitude + ',' + cityData.longitude
  return fetch(url1 + latLong + url2)
  .then(response => {
    if (response.ok) {
      return response.json();}
    throw new Error('Request Failed.');},
    networkError => console.log(networkError.message))
  .then(json => {
    let data = json["daily"]["data"]
    let returnData = {}
    for (var i = 0; i < data.length; i ++) {
      returnData[`${i + 1}`] = {
        // "city_id": data[i][""],
        // "day_id": data[i][""],
        high: data[i]["temperatureHigh"],
        low: data[i]["temperatureLow"],
        icon: data[i]["icon"],
        precipProbability: data[i]["precipProbability"],
        summary: data[i]["summary"]
      }
    }
    return returnData
  })
  .catch((error) => {
    console.log(error)
  })
};

//find city => return city includes current,steadies,citydays
//else => create city, create current, create steadies, create citydays => return city includes current,steadies,citydays

router.get("/", function(req,res,next) {
  if (req.body.api_key) {
    let inputKey = req.body.api_key
    User.findOne({
      where: {
        api_key: inputKey
      }
    }).then(user => {
      if (user) {
        City.getCityData(req.query.location)
        .then(result => {
          return City.findOne({
            where: {
              name: result["name"],
              state: result["state"],
            }
          })
          .then(city => {
            if (city) {
              const current = CityCurrent.createCurrentData(result,city["dataValues"]["id"])
              // const steadies = CitySteady.createSteadiesData();
              // const cityDays = CityDays.createCityDaysData();
              Promise.all([current]).then(returnData => {
                res.setHeader("Content-Type", "application/json");
                res.status(200).send({
                  city: city["dataValues"],
                  current: returnData[0]["dataValues"]
                  // steadies: returnData[1]["dataValues"],
                  // forecast: returnData[2]["dataValues"]
                })
              })
              .catch((error) => {
                console.log(error)
              });
            }
            else {
              return City.create(result)
              .then(newCity => {
                const current = CityCurrent.createCurrentData(result,newCity["dataValues"]["id"]);
                // const steadies = CitySteady.createSteadiesData();
                // const cityDays = CityDays.createCityDaysData();
                Promise.all([current]).then(returnData => {
                  res.setHeader("Content-Type", "application/json");
                  res.status(200).send({
                    city: newCity["dataValues"],
                    current: returnData[0]["dataValues"]
                    // steadies: 'not ready yet',
                    // forecast: 'not ready yet'
                  })
                })
                .catch((error) => {
                  console.log(error)
                });
              })
              .catch((error) => {
                console.log(error)
              });

            }
          })
          .catch((error) => {
            console.log(error)
          });
        })
        .catch((error) => {
          console.log(error)
        });
      }
      else {
        res.setHeader("Content-Type", "application/json");
        res.status(401).json({
          error: `Unauthorized.`
        });
      }
    })
    .catch((error) => {
      console.log(error)
    });
  }
  else {
    res.setHeader("Content-Type", "application/json");
    res.status(401).json({
      error: `Unauthorized.`
    });
  }
})

module.exports = router;
