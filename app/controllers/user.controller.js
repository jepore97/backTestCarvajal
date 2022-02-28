

const User=require('../models/user.model')
const jwt = require('jsonwebtoken');
const configData = require('../config/data.config');
const { use } = require('express/lib/application');

exports.loginUser =(req, res) => {
 
    if (req.body) {
      var user = req.body;
      User.findAll({ where: {email:user.email,pass:user.password}})
          .then(data => {
            console.log('data: ', data);
            var token = jwt.sign(user, configData.JWT_SECRET);
        
            res.status(200).send({
              signed_user: data[0],
              token: token
            });     
        })
          .catch(err => {
              console.log('err: ', err);
            res.status(403).send({
                errorMessage: 'Please provide email and password'
              });
          });
   
  }
}