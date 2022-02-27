module.exports = app => {
  const productos = require("../controllers/producto.controller.js");

  var router = require("express").Router();

  router.post("/", productos.create);
  router.get("/datafake", productos.dataFake);

  router.get("/", productos.findAll);

  router.get("/:id", productos.findOne);

  router.put("/:id", productos.update);

  router.delete("/", productos.delete);

  router.delete("/", productos.deleteAll);

  app.use('/api/products', router);
};
