


var jwt = require('jsonwebtoken');
const User=require("../models/User")
const signup=(req,res,err)=>{
   let userData=req.body.data;
   let user=new User({...userData})
   user.save((err,user)=>{
       if(err){
           return res.json({success:false,error:"user found "})
       }
       res.json(200)
   })
}
const login=(req,res,err)=>{
    User.find({email:req.body.data.email},(err,user)=>{
        if(err){
             return res.json({success:false,error:"user not found "})
        }
        jwt.sign(req.body.data,"secret",(err,token)=>{
       return res.json({success:true,token:"Bearer "+token})
        })
    })
}
const current=(req,res,err)=>{

        res.json({success:true,user:req.user})
   
}
module.exports={
  signup,
  login,
  current
    

}