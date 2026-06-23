const mongoose=require("mongoose");
const orderSchema=new mongoose.Schema({


customer:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
},


supplier:{
type:mongoose.Schema.Types.ObjectId,
ref:"Supplier",
required:true
},


quantity:{
type:Number,
required:true,
min:1
},


amount:{
type:Number,
required:true,
min:0
},


status:{
type:String,
enum:["Pending","Accepted","Out for Delivery","Delivered","Cancelled"],
default:"Pending"
},


deliveryLocation:{


latitude:Number,

longitude:Number

},


paymentStatus:{
type:String,
enum:["Pending","Paid","Failed","Refunded"],
default:"Pending"
}


},{timestamps:true});


module.exports =
mongoose.model("Order",orderSchema);
