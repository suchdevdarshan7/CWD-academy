const fs = require('fs');


const data = fs.readFileSync("./data/products.json", "utf-8");
const convertToJson = JSON.parse(data);

function getAllProducts(req, res, next) {
    res.status(200).json({ status: "success", data: convertToJson })
}

function getProductsById(req, res, next) {
    const { slug } = req.params;

    const id = slug * 1;

    const DataById = convertToJson.find((el) => {
        return el.id === id;
    })


    res.json({ status: "success", data: DataById })
}

module.exports = { getAllProducts, getProductsById };