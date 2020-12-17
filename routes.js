const express = require('express')
const router = express.Router()
const userController = require('./userController')
const productController = require('./productController')

module.exports = function() {
    router.post('/user', userController.insert)
    router.post('/product', productController.insert)
    return router
}