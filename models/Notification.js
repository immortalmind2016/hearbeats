

var mongoose=require("mongoose");
var schema=mongoose.Schema;
var Notification=new schema({

 from:{
    type:mongoose.Types.ObjectId,
    ref:"User",
        unique:false

 },
to:{
    type:mongoose.Types.ObjectId,
    ref:"User",
    unique:false
},
message:String


})
module.exports=mongoose.model("Notification",Notification);