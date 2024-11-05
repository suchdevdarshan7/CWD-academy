//! They are normal function which has request response and next arguments

const express = require('express');

const app = express();

const cors = require('cors');

const ProductRouter = require('./routes/products.routes.js')

app.use(cors())
//! Routing: 
app.use('/products', ProductRouter);



app.listen(3000, () => {
    console.log(`The server is running in port 3000`)
})