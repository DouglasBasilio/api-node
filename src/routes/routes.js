// import Router
const router = require('express').Router()

const ProductController = require('../controllers/products')

router.get('/products', ProductController.get)
// router.get('/products', ProductController.post)
// router.get('/products/:id', ProductController.put)
// router.get('/products/:id', ProductController.delete)

module.exports = router