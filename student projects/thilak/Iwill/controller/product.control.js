const express = require('express');

// const slug = require('slug');

const product = require('../Data/product.js');

// console.log(product);

function getproduct(req,res,next){
    res.send(product);
}

function getproductId(req,res,next){
    const {slug} = req.params;

    const id = slug*1;

    if(id>product.length){
        res.status(400).json({status:"not exist",message:"element is not found in product"});
    }
    const products = product.at(id-1);
    
    res.send(products);
}

module.exports = {getproduct,getproductId};

