const express= require('express');

const cors = require('cors')
const app= express();


const Reqrouter=require('./router/product.router.js');

app.use(cors())

app.use('/product',Reqrouter)

app.listen(5000,()=>{
    console.log(`this server is running in port of 5000`);
})


// app.use((req,res,next)=>{
//     console.log("This is an just server creation");
//     next()
// })
// app.get('/',(req,res,next)=>{
//     res.send("This isthe next page");
// })
// app.get('/products',(req,res,next)=>{
//     res.send("msg:this is mssage")
// })
// app.post('/',(req,res,next)=>{
//     res.send("this is some post method")
//})  