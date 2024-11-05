const products = require('../data/product.js');

function getAllProducts(req, res, next) {
    res.status(200).json({ status: "success", products })
}

function getProduct(req, res, next) {
    const { slug } = req.params;
    const id = slug * 1;

    if (id > products.length) {
        return res.status(400).json({ status: "failed", message: "Id does not exists" })
    }

    const product = products.at(id - 1);
    res.status(200).json({ status: "success", product })


}

module.exports = { getAllProducts, getProduct };