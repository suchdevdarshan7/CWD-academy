const express = require('express');
const cors = require('cors');

const app = express();
const ProductRouter = require('./routes/movie.routes.js');

app.use(cors());
app.use(express.json()); 
app.use('/movies', ProductRouter);

app.listen(3000, () => {
    console.log("The server is running on port 3000");
});
