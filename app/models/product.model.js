
var Sequelize = require('sequelize');
// importing connection database
var db = require('../config/connectDb');

  const Products = db.define("product", {
    
    price: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    image:{
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    stock: {
      type: Sequelize.INTEGER
    }
  });

  module.exports =  Products;

