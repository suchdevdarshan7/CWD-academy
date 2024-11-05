const express = require('express');
const app = express()

const port = process.env.PORT || 3000;

// ! Middleware :

app.use(express.json())

const products = [
    {
        id: 1,
        product: "Apple Phone",
    },
    {
        id: 2,
        product: "Dell laptop",
    },
    {
        id: 3,
        product: "Oppo Earpods"
    }

]

app.get('/', (req, res) => {
    res.send("<h1>Welcome to this page</h1>")
})

app.get('/products', (req, res) => {
    res.send(products);
})


app.get('/products/:slug', (req, res) => {

    const { slug } = req.params
    const id = slug * 1;
    const product = products.at(id - 1)
    res.send(product)
})


app.post('/products', (req, res) => {
    console.log(req.body)
    const product = { id: products.length + 1, ...req.body }
    products.push(product);
    res.send("Added succesfully")
})



app.listen(port, () => {
    console.log(`The server is running in port ${port}`)
})







