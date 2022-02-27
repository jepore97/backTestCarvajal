
dataFake = require('../config/datosFake');
const Producto = require('../models/product.model');

// Create and Save a new Producto
exports.create = (req, res) => {
  // Validate request

  // Create a Producto
  const producto = {
    price: req.body.price,
    name:req.body.name,
    image: req.body.image,
    description: req.body.description,
    stock: req.body.stock,
    state:req.body.state?req.body.state:true
  };

  // Save Producto in the database
  Producto.create(producto)
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

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Producto.findAll({ where: condition })
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

// Find a single Producto with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Producto.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Producto with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Producto with id=" + id
      });
    });
};

// Update a Producto by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Producto.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Producto was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Producto with id=${id}. Maybe Producto was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Producto with id=" + id
      });
    });
};

// Delete a Producto with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Producto.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Producto was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Producto with id=${id}. Maybe Producto was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Producto with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Producto.destroy({
    where: {},
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

exports.dataFake=(req,res)=>{
  dataFake.datos.forEach(async(producto)=>{
    
    console.log('producto: ', producto);
   await Producto.create(producto)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Producto."
      });
    });
  })
 
}
