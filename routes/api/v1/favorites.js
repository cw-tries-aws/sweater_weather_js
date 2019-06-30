var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')
var pry = require('pryjs');
require('dotenv').config()

var User = require('../../../models').User;
var City = require('../../../models').City;
var UserCity = require('../../../models').UserCity;
var CityCurrent = require('../../../models').CityCurrent;


const steadyUrl = `https://weather.cit.api.here.com/weather/1.0/report.json?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg&product=forecast_astronomy&name=`
const currentUrl1 = `https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET_KEY}/`
const currentUrl2 = `?exclude=daily,minutely,hourly,alerts,flags`
const forecastUrl1 = `https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET_KEY}/`
const forecastUrl2 = `?exclude=currently,minutesly,hourly,alerts,flags&time=${new Date()}`


// the create part is in the post request actually
const createCurrentData = (cityData,cityId,url1,url2) => {
  const latLong = cityData.latitude + ',' + cityData.longitude
  return fetch(url1 + latLong + url2)
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
    return returnData
  })
  .catch((error) => {
    console.log(error)
  })
};


// const createSteadyData = (cityData,cityId,url) => {
//   const fullCity = cityData.name + ',' + cityData.state
//   return fetch(url + fullCity)
//   .then(response => {
//     if (response.ok) {
//       return response.json();}
//       throw new Error('Request Failed.');},
//       networkError => console.log(networkError.message))
//       .then(json => {
//         let data = json["astronomy"]["astronomy"][0];
//         let returnData = {
//           sunrise: data["sunrise"],
//           sunset: data["sunset"],
//           moonPhase: data["moonPhase"],
//           phaseDescription: data["moonPhaseDesc"],
//           phaseIcon: data["iconName"],
//           cityId: cityId
//           dayId: // how do I get this...
//         }
//         return returnData
//       })
//       .then(data => {
//         CitySteady.create(data)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//     };



router.get("/", function(req,res,next) {
  let inputKey = req.body.api_key
  User.findOne({
    where: {
      api_key: inputKey
    }
  }).then(user => {
    if (user) {
      const userCities = UserCity.findAll({
        where: {
          UserId: user["dataValues"]["id"]
        },
        include: [{model: CityCurrent}]
      })
      .then(data => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(data))
      }
      )
      .catch((error) => {
        console.log(error)
      });
    }
    else {
      res.setHeader("Content-Type", "application/json");
      res.status(404).json({
        error: `Unauthorized.`
      });
    }
  })
  .catch((error) => {
    console.log(error)
  });
})


router.post('/', function(req,res,next) {
  let inputKey = req.body.api_key
  User.findOne({
    where: {
      api_key: inputKey
    }
  }).then(user => {
    if (user) {
      const findOrCreateCityData = City.getCityData(req.body.location)
      .then(result => {
        return City.findOrCreate({
          where: {
            name: result["name"],
            state: result["state"],
            country: result["country"],
            latitude: result["latitude"].toString(),
            longitude: result["longitude"].toString()
          }
        })
        .then(city => {
          UserCity.findAll({
            where: {
              CityId: city[0]["dataValues"]["id"],
              UserId: user["dataValues"]["id"]
            }
          }).then(result => {
            if (result[0]) {
              res.setHeader("Content-Type", "application/json");
              res.status(200).send({
                "message": `${req.body.location} is already in your favorites`
              })
            }
            else {
              const cityName = city[0]["dataValues"]["name"] + ', ' + city[0]["dataValues"]["state"]

              // const citySteady = createSteadyData(city[0]["dataValues"],city[0]["dataValues"]["id"],steadyUrl1,steadyUrl2)
              //   .then(results => {
              //     return CitySteady.create(results)
              //   }) // this is a promise
              // const cityDays = createCityDayData(city[0]["dataValues"],city[0]["dataValues"]["id"],forecastUrl1,forecastUrl2)
              //   .then(results => {
              //     const returnData = {
              //       for (i = 0; i < results.count; i ++) {
              //         CityDay.create(results[i])
              //           .catch((error) => {
              //             console.log(error)
              //           });
              //       }
              //     }
              //     return returnData
              //   }) // this is a promise
              //
              // Promise.all(citySteady,cityDays)
              //   .then(what's below)

              const cityCurrent = createCurrentData(city[0]["dataValues"],city[0]["dataValues"]["id"],currentUrl1,currentUrl2)
                .then(results => {
                  return CityCurrent.create(results)
                }).then(cityCurrent => {
                  UserCity.create({
                    cityName: cityName,
                    CityId: city[0]["dataValues"]["id"],
                    UserId: user["dataValues"]["id"],
                    CityCurrentId: cityCurrent["dataValues"]["id"]
                  })
                  .then(data => {
                    res.setHeader("Content-Type", "application/json");
                    res.status(200).send({
                      "message": `${req.body.location} has been added to your favorites`
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

          }).catch((error) => {
            console.log(error)
          });
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
      res.status(404).json({
        error: `Unauthorized.`
      });
    }
  })
  .catch((error) => {
    console.log(error)
  });
})

router.delete('/', function(req,res,next) {
  let inputKey = req.body.api_key
  User.findOne({
    where: {
      api_key: inputKey
    }
  }).then(user => {
    if (user) {
      const findOrCreateCityData = City.getCityData(req.body.location)
      .then(result => {
        return City.findOrCreate({
          where: {
            name: result["name"],
            state: result["state"],
            country: result["country"],
            latitude: result["latitude"].toString(),
            longitude: result["longitude"].toString()
          }
        })
        .then(city => {
          UserCity.findAll({
            where: {
              CityId: city[0]["dataValues"]["id"],
              UserId: user["dataValues"]["id"]
            }
          }).then(result => {
            if (result[0]) {
              UserCity.destroy({
                where: {
                  CityId: city[0]["dataValues"]["id"],
                  UserId: user["dataValues"]["id"]
                }
              })
              .then(result => {
                res.setHeader("Content-Type", "application/json");
                res.status(200).send({
                  "message": `${req.body.location} has been removed from your favorites`
                })
              })
              .catch((error) => {
                console.log(error)
              });
            }
            else {
              res.setHeader("Content-Type", "application/json");
              res.status(200).send({
                "message": `${req.body.location} is not in your favorites`
              })
            }
          }).catch((error) => {
            console.log(error)
          });
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
      res.status(404).json({
        error: `Unauthorized.`
      });
    }
  })
  .catch((error) => {
    console.log(error)
  });
})


module.exports = router;
