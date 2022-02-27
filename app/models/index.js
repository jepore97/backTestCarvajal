const dbConfig = require("../config/db.config.js");

const{User}= require('./user.model')
const{Products}= require('./product.model')
const{Wish}= require('./wish.model')
const Sequelize = require("sequelize");

const db = {};

db.Sequelize = Sequelize;


module.exports = db;
