const express = require('express');
const fs = require("fs");
const router = require('./routes/movie.routes');

const app = express();

const port = 3000;

app.use(express.json())


const notfoundHtml = fs.readFileSync('./not-found.html', 'utf-8');

app.use('/api/songs', router)

app.get('/*', (req, res) => {
    res.send(notfoundHtml);
})


app.listen(port, () => {
    console.log(`The server is running in port ${port}`)
})