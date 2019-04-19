var mongoose=require("mongoose");
var schema=mongoose.Schema;
var Analysis=new schema({

age:Number,
sex:Number,
cp:Number,
chol:Number,
fbs:Number,
restecg:Number,
thalach:Number,
exang:Number,
oldpeak:Number,
slope:Number,
cas:Number,
thal:Number,
class:Number,
user:{
    type:schema.Types.ObjectId,
    ref:"User"
}


})
module.exports=mongoose.model("Analysis",Analysis);