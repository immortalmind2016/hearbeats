

var mongoose=require("mongoose");
var schema=mongoose.Schema;
var User=new schema({

 email:{
     type:String,
     unique:true
 },
 password:String,
 name:String,
 type:Number


})
module.exports=mongoose.model("User",User);