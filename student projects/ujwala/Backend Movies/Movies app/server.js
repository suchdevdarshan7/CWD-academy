const express = require('express')

const cors = require('cors')

const app = express();
const port = process.env.port || 3000



const MoviesRouter = require("./router/movies.route.js");

app.use(cors())

app.use('/Movie',MoviesRouter)

app.listen(3000,()=>{
    console.log("server is running in the port 3000 ")
})

