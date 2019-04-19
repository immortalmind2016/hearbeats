


var jwt = require('jsonwebtoken');
const request=require("request")
const Analysis=require("../models/Analysis")
const analyze=(req,res,err)=>{
  let analysisData=req.body.data;
    let result=1;
  let newAnalysis=new Analysis({...analysisData,result,user:req.user._id})
  //request.post("/")
 console.log("HERE")
  newAnalysis.save((err,analsis)=>{
      res.json({success:true,result})
  })
}
const getAnalysis=(req,res,err)=>{
    Analysis.find({user:req.user._id},(err,analysis)=>{
        res.json({success:true,analsis})
    })
}
module.exports={
  analyze,
  getAnalysis
  
    

}