const Wish = require('../models/wish.model');
const Product=require('../models/product.model')
const User=require('../models/user.model')

exports.create = (req, res) => {
    // Validate request
  
    // Create a Producto
    const wish = {
      user_id: req.body.user_id,
      product_id:req.body.product_id,
    };
  
    // Save Producto in the database
    Wish.create(wish)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Producto."
        });
      });
  };




  exports.findAll = (req, res) => {
    const id = req.params.user_id;
  
    Wish.findAll({ where: {user_id:id},
        include: [
            {
                model: Product,
            }]
     })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  
  exports.deleteWish=(req, res)=>{
    const wish = {
      user_id: req.body.user_id,
      product_id:req.body.product_id,
    }; 
    Wish.destroy({
        where: { user_id:wish.user_id,product_id:wish.product_id}
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Producto was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Producto with id=${wish.product_id}. Maybe Producto was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Producto with id=" + wish.product_id
          });
        });
}
  

exports.deleteWishAll = (req, res) => {
    const id = req.params.user_id;
    Wish.destroy({
      where: {user_id:id},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };