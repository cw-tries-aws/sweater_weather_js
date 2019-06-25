var express = require('express');
var router = express.Router();
var User = require('../../models').User;

router.post("/users", function(req,res,next) {
  User.create({
    username: req.body.username,
    password: req.body.password,
    api_key: Math.random.toString(36).substring(2,8)
    // the arg for toString is the radix which means what base (binary = 2); 36 includes letters
    // substring takes the characters from index 2 to 8 not including 8
  })
  .then(user => {
    res.setHeader("Content-Type", "application/json");
    res.status(201).send(`${user.username} has been created`)
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error})
  });
})

module.exports = router;
