const dbcon=require('../../config/db.config')
module.exports={

  "development": {
    "username": dbcon.USER,
    "password": 'root',
    "database": dbcon.DB,
    "host": dbcon.HOST,
    "dialect": "postgres"
  }
}
