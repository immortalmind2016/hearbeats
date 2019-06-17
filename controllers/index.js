


var jwt = require('jsonwebtoken');
const request=require("request")
const Analysis=require("../helpers/analysis")
const Notification=require("../models/Notification")
const Analyze=require("../models/Analysis")
const index=require("../index.js")
const {getUnique}=require("../helpers/filter")
  let analysisInstance=new Analysis();

const analyze=(req,res,err)=>{
  let analysisData=req.body.data;
    let result=0.8;
  
  analysisData.sex=analysisData.sex=="male"?1:0;
  analysisInstance.storeData({...analysisData,result,user:req.user._id}).then((result)=>{
    res.json({success:true,result})
  })


}
const getAnalysis=(req,res,err)=>{
    analysisInstance.getData(req.user._id).then((anaylsis)=>{
          res.json({success:true,anaylsis})

    })
}


const sendNotification=(req,res,err)=>{
  const result=req.body.data.result;
  console.log("RESULT SEND JNOTIF",result)
  const message=req.body.data.message
  const from=req.user._id
  let usersArr=[]
  analysisInstance.getSpecificData(result).then((analysis)=>{
    usersArr=analysis.map((analyze)=>{

   

 
      return {from,to:analyze.user,message,result:analyze.result}



    })

 usersArr=getUnique(usersArr,'to')
    usersArr.forEach((user)=>{
 
    if(user.result>=0.5&&result)
  new Notification({...user}).save((err,notifications)=>{
        
 
  })
     else if(user.result<0.5&&!result)
  new Notification({...user}).save((err,notifications)=>{
      
 
        })
    })

    
  })
 
  
      res.json({success:true,notifications})
}
const notifications=(req,res,err)=>{
  //type 1 doctor 
  // type 0 user
  Notification.find(req.user.type?{from:req.user._id}:{to:req.user._id},(err,notifications)=>{
              res.json({success:true,notifications})

  }).populate("from")
}
const getStatic=(req,res,err)=>{
  let postive=0;


  Analyze.find({},(err,users)=>{
    if(!users)
    users.forEach((user)=>{
      if(user.result>=0.5)
      postive++;
    })
    res.json({success:true,postive,negative:users.length-postive,all:users.length})
  })
}
module.exports={
  analyze,
  getAnalysis,
  sendNotification,
  notifications,
  getStatic
  
    

}