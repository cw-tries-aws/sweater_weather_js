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
                // check if associations return as well -they don't
                const current = CityCurrent.createCurrentData(result,city["dataValues"]["id"])
                // const steadies = CitySteady.createSteadiesData();
                // const cityDays = CityDays.createCityDaysData();
                Promise.all([current]).then(returnData => {
                  res.setHeader("Content-Type", "application/json");
                  res.status(200).send({
                    city: city["dataValues"],
                    current: returnData[0]["dataValues"]
                    // steadies: data[2],
                    // forecast: data[3]
                  })

                })
                .catch((error) => {
                  console.log(error)
                });
              }
              else {
                //create everything
                return City.create(result)
                  .then(newCity => {
                    const current = CityCurrent.createCurrentData(result,newCity["dataValues"]["id"]);
                    // const steadies = CitySteady.createSteadiesData();
                    // const cityDays = CityDays.createCityDaysData();
                    // return {data: data, current: current}
                    // eval(pry.it)
                    res.setHeader("Content-Type", "application/json");
                    res.status(200).send({
                      city: newCity
                      // current: currentResults["current"],
                      // steadies: 'not ready yet',
                      // forecast: 'not ready yet'
                    })
                    // return current
                  })
                  // .then(currentResults => {
                  // })
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
  })
  .catch((error) => {
    console.log(error)
  });

})



// router.get("/", function(req,res,next) {
//   let inputKey = req.body.api_key
//   User.findOne({
//     where: {
//       api_key: inputKey
//     }
//   }).then(user => {
//     if (user) {
//       const findOrCreateCityData = City.getCityData(req.query.location)
//       .then(result => {
//         return City.findOrCreate({
//           where: {
//             name: result["name"],
//             state: result["state"],
//             country: result["country"],
//             latitude: result["latitude"].toString(),
//             longitude: result["longitude"].toString()
//           }
//         })
//         .then(city => {
//           return city
//         })
//         .catch((error) => {
//           console.log(error)
//         })
//       })
//       .then(data => {
//         return data[0]["dataValues"]
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//
//       const steadies = City.getCityData(req.query.location)
//       .then(cityData => {
//         return getSteadyData(cityData,steadyUrl)
//       })
//       .then(response => {
//         return response
//       })
//       .catch((error) => {
//         console.log(error)
//       });
//
//       const currents = City.getCityData(req.query.location)
//       .then(cityData => {
//         return getCurrentData(cityData,currentUrl1,currentUrl2)
//       })
//       .then(response => {
//         return response
//       })
//       .catch((error) => {
//         console.log(error)
//       });
//
//       const cityDays = City.getCityData(req.query.location)
//       .then(cityData => {
//         return getCityDayData(cityData,forecastUrl1,forecastUrl2)
//       })
//       .then(response => {
//         return response
//       })
//       .catch((error) => {
//         console.log(error)
//       });
//
//
//       Promise.all([findOrCreateCityData,currents,steadies,cityDays])
//       .then(data => {
//         res.setHeader("Content-Type", "application/json");
//         res.status(200).send({
//           city: data[0],
//           current: data[1],
//           steadies: data[2],
//           forecast: data[3]
//         })
//       })
//       .catch((error) => {
//         console.log(error)
//       });
//     }
//     else {
//       res.setHeader("Content-Type", "application/json");
//       res.status(404).json({
//         error: `Unauthorized.`
//       });
//     }
//   })
// });


module.exports = router;
