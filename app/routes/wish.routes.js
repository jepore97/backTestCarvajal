module.exports = app => {
    const wish = require("../controllers/wish.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", wish.create);
    router.get("/:user_id", wish.findAll);
    router.post("/deletewish", wish.deleteWish);
    router.delete("/:user_id", wish.deleteWishAll);
    app.use('/api/wish', router);
  };
  