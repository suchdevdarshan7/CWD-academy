import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.status(400).json({ status: "success", message: "Working perfectly" })
})

// ! by default 200 we be passed : 

app.get('/about', (req, res) => {
    res.send('hi')
})


app.listen(3000, () => {
    console.log('The server is running in port 3000')
})


// app.get('/', (req, res) => {
//     res.send('hello')
// })

// app.post('/', (req, res) => {
//     res.send('hello the data was succesfully recieved')
// })

