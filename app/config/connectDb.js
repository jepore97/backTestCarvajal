const dbConfig = require("../config/db.config.js");

var pgtools = require('pgtools');
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

try {
    pgtools.createdb({
       user:  dbConfig.USER,
       password: dbConfig.PASSWORD,
       port: 5432,
       host: dbConfig.HOST
     }, 'testdb', function (err, res) {
        sequelize.sync();
     });
    
   } catch (error) {
     console.log('error: ', error);
   }
module.exports=sequelize