const express = require('express')

const router = express.Router();

const fs = require('fs');



const productHTML = fs.readFileSync('./views/product.html', 'utf-8');


router
    .route('/')
    .get((req, res, next) => {
        res.send(productHTML)
    })

module.exports = router;