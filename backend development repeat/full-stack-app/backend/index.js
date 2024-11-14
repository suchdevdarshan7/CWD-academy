const express = require('express')
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const ProductRouter = require('./routes/products.routes.js')
const app = express();


app.use(cors());

app.use('/products', ProductRouter);

app.listen(PORT, () => {
    console.log(`The server is running in PORT: ${PORT}`)
})

