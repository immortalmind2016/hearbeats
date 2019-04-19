


var jwt = require('jsonwebtoken');
const User=require("../models/User")
const signup=(req,res,err)=>{
   let userData=req.body.data;
   console.log(req.body)
   let user=new User({...userData})
   User.find({email:user.email},(err,usr)=>{
       if(usr){
             return res.json({success:false,error:"user found "})
       }
   user.save((err,user)=>{
       console.log("USSSER ",err)
      
       res.json(200)
   })
   })

}
const login=(req,res,err)=>{
    console.log("BODYYY ",req.body.data)
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
 console.log("CURRENT")
        res.json({success:true,user:req.user})
   
}
module.exports={
  signup,
  login,
  current
    

}