const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
const router = require('./routes/movies.routes')
app.use('/movies',router);
app.listen(3000,()=>{
    console.log('server running on 3000')
})