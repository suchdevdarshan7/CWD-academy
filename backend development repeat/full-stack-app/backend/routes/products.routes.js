const express = require('express');
const { getAllProducts, getProductsById } = require('../controllers/products.controller');

const router = express.Router()

router.route('/').get(getAllProducts);

router.route('/:slug').get(getProductsById)

module.exports = router;