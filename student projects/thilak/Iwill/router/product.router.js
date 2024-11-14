const express=require('express')
const router=express.Router();

const {getproduct,getproductId} = require('../controller/product.control.js')

// router.route('/').get((req,res,next)=>{
//     console.log("This is from router folder send"); 
//     res.status(200).json({status:"success",message:"page is rendering successfully"})
//     next()
// })

router.route('/').get(getproduct)

router.route('/:slug').get(getproductId)

module.exports=router;