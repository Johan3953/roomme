// Dependencies
var UserData = require("../models/user.js");

// Routes
module.exports = function (app) {
  // Search for Specific User (or all users) then provides JSON
  app.get("/api/all", function(req, res) {

    UserData.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });


  // create an account
  app.post("/api/new", function (req, res) {
    UserData.create({
      /*
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      photo: req.body.photo,
      smoking: req.body.smoking,
      */
      q1: req.body.q1,
      q2: req.body.q2,
      q3: req.body.q3,
      q4: req.body.q4,
      q5: req.body.q5,
      q6: req.body.q6,
      q7: req.body.q7,
      q8: req.body.q8,
      q9: req.body.q9,
      q10: req.body.q10 
    }).then(function(results) {
      res.end();
    });
  });
};