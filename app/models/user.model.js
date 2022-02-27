
var Sequelize = require('sequelize');
// importing connection database
var db = require('../config/connectDb');

var Users = db.define("user", {
  name: {
    type: Sequelize.STRING
  },
  email:{
    type: Sequelize.STRING
  },
  pass:{
    type: Sequelize.STRING
  },
  state:{ 
    type: Sequelize.BOOLEAN
  }
});

module.exports = Users