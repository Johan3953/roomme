// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });

  app.get("/questions", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/questions.html"));
  });
};
