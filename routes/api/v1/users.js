var express = require('express');
var router = express.Router();
var User = require('../../../models').User;
var bcrypt = require('bcryptjs');
var validator = require('email-validator');

router.post("/", function(req,res,next) {
  var email = req.body.email
  var password = req.body.password
  var confirm = req.body.passwordConfirmation

  if (email)

  User.findOne({
    where: {
      email: email
    }
  }).then(result => {
    if (result) {
      res.setHeader("Content-Type", "application/json");
      res.status(409).json({
        error: `Email already exists in system.`
      });
    }
    else {
      if (confirm === "") {
        res.setHeader("Content-Type", "application/json");
        res.status(409).json({
          error: `Must provide password confirmation.`
        });
      }
      else if (!validator.validate(email)) {
        res.setHeader("Content-Type", "application/json");
        res.status(409).json({
          error:`Invalid email address.`
        });
      }
      else if (password.length < 8) {
        res.setHeader("Content-Type", "application/json");
        res.status(409).json({
          error: `Invalid email address.`
        })
      }
      else if (password !== confirm) {
        res.setHeader("Content-Type", "application/json");
        res.status(409).json({
          error: `Passwords must match.`
        });
      }
      else {
        bcrypt.genSalt(10, function(err,salt) {
          bcrypt.hash(req.body.password, salt, function(err,hash) {
            User.create({
              email: email,
              password: hash,
              api_key: Math.random().toString(36).substring(2,8)
              // the arg for toString is the radix which means what base (binary = 2); 36 includes letters
              // substring takes the characters from index 2 to 8 not including 8
            })
            .then(user => {
              res.setHeader("Content-Type", "application/json");
              res.status(201).json({
                message: `${email} has been created`,
                api_key: `${user.api_key}`
              });
            })
            .catch(error => {
              res.setHeader("Content-Type", "application/json");
              res.status(500).send({error});
            });
          })
        })
      }
  }});
});

module.exports = router;
