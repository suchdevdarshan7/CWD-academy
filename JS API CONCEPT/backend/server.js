const express = require('express');
const app = express()
const cors = require('cors');

app.use(cors())
app.use(express.json())


app.post('/', (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log("The server is running")
})