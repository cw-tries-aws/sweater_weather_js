var express = require('express');
var router = express.Router();
var User = require('../../../models').User;
var bcrypt = require('bcryptjs');

router.post("/", function(req,res,next) {
  var email = req.body.email
  var password = req.body.password
  var confirm = req.body.passwordConfirmation

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
        res.status(409).send(`Must provide password confirmation.`)
      }
      else if (password === confirm) {
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
              res.status(201).send(`${email} has been created ${JSON.stringify(user)}`);
            })
            .catch(error => {
              res.setHeader("Content-Type", "application/json");
              res.status(500).send({error});
            });
          })
        })
      }
      else {
        res.setHeader("Content-Type", "application/json");
        res.status(409).send(`Passwords must match.`)
      }
    }
  });
});

module.exports = router;
