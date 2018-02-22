// Dependencies
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var UserData = sequelize.define("user", {
    /*
    firstName: {type: Sequelize.STRING},
    lastName: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    photo: {type: Sequelize.STRING},
    smoking: {type: Sequelize.BOOLEAN},
    */
    q1: {type: Sequelize.INTEGER},
    q2: {type: Sequelize.INTEGER},
    q3: {type: Sequelize.INTEGER},
    q4: {type: Sequelize.INTEGER},
    q5: {type: Sequelize.INTEGER},
    q6: {type: Sequelize.INTEGER},
    q7: {type: Sequelize.INTEGER},
    q8: {type: Sequelize.INTEGER},
    q9: {type: Sequelize.INTEGER},
    q10: {type: Sequelize.INTEGER},
  }, {
    timestamps: false
  });

// Syncs with DB
UserData.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = UserData;
