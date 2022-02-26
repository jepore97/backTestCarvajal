module.exports = (sequelize, Sequelize) => {
  const Producto = sequelize.define("producto", {
    
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
    },
    state:{ 
      type: Sequelize.BOOLEAN
    }
  });

  return Producto;
};
