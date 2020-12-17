"use strict";

var express = require('express');

var router = express.Router();

var userController = require('./userController');

var productController = require('./productController');

module.exports = function () {
  router.post('/user', userController.insert);
  router.post('/product', productController.insert);
  return router;
};