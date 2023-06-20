const express = require('express')
const router = express.Router()
const Order = require("../models/Orders")

router.post('/myOrders',async(req,res)=>{
    try {
        let eId =await Order.findOne({'email':req.body.email});
        res.json({orderData:eId});
    } catch (err) {
        console.error(err.message);
    }
})




module.exports = router