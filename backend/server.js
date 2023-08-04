const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const Razorpay = require('razorpay');
const {key_id,key_secret}=process.env;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.post("/orders",(req,res)=>{
    var instance = new Razorpay({
        key_id: key_id,
        key_secret: key_secret,
      });
    var options = {
        amount: req.body.amount*100, 
        currency: "INR"
      };
      instance.orders.create(options, function(err, order) {
        if(err){
            return res.send({code:500,message:"Server Error"})
        }
        return res.send({code:200,message:"order created",data:order})
      });
})
app.post("/verifyOrder",(req,res)=>{
    generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);

  if (generated_signature == razorpay_signature) {
    console.log("payment is successful")}
  var instance = new Razorpay({ key_id: key_id, key_secret: key_secret})
  var {validatePaymentVerification,validateWebhookSignature}=require('./dist/utils/razorpay-utils');
  validatePaymentVerification({"order_id":razorpayOrderId,"payment_id":razorpayPaymentId}, 
signature,secret);
})

app.listen(5000,()=>{
    console.log("Server started at port 5000");
})