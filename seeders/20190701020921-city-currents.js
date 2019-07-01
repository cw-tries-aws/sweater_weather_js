'use strict';
var CityCurrent = require('../models').CityCurrent;
var City = require('../models').City;
var pry = require('pryjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return City.findAll({
      where: {
        latitude: {
          [Sequelize.Op.ne]: null
        }
      }
    })
    .then(cities => {
      for (var i = 0; i < cities.length; i ++) {
        return CityCurrent.createCurrentData(cities[i]["dataValues"],cities[i]["dataValues"]["id"])
          .then(currentData => {
            return CityCurrent.create(currentData)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
    .catch((error) => {
      console.log(error)
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "CityCurrents", null, {}
    )
  }
};
