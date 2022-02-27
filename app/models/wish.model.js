
  
  var Sequelize = require('sequelize');
  const User=require('./user.model')
  const Product=require('./product.model')
// importing connection database
var db = require('../config/connectDb');

var Wish = db.define("wish", {
  user_id: {
    type: Sequelize.INTEGER
  },
  product_id:{
    type: Sequelize.INTEGER
  },
  state:{ 
    type: Sequelize.BOOLEAN
  }
  
});

User.hasMany(Wish, {
  sourceKey: 'id',
  foreignKey: 'user_id',
});  
Wish.belongsTo(User,{
  targetKey:'id',
  foreignKey: 'user_id',

});

Product.hasMany(Wish, {
  sourceKey: 'id',
  foreignKey: 'product_id',
});  
Wish.belongsTo(Product,{
  targetKey:'id',
  foreignKey: 'product_id',

});

module.exports = Wish