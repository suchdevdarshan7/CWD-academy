const express = require('express');

const router = express.Router();
const { getAllProducts, getProduct } = require('../controller/product.controller.js');



router
    .route('/')
    .get(getAllProducts)

router
    .route('/:slug')
    .get(getProduct)


module.exports = router;
