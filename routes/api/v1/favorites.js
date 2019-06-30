var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')
var pry = require('pryjs');
require('dotenv').config()

var User = require('../../../models').User;
var City = require('../../../models').City;
var UserCity = require('../../../models').UserCity;



router.get("/", function(req,res,next) {
  let inputKey = req.body.api_key
  User.findOne({
    where: {
      api_key: inputKey
    }
  }).then(user => {
    if (user) {
      // eval(pry.it)
      return UserCity.findAll({
        where: {
          userId: user["dataValues"]["id"]
        }
      })
      .then(data => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send({
          favorites: data
        })
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
