const request=require("request")
const Database=require("../config/database");
const database=new Database().getInstance()
database.connect("mongodb://immortalmind:0115120323m@ds343985.mlab.com:43985/software_project")

const Analyze=require("../models/Analysis")
// Builder
class Analysis{

    fetchResult(data){
        return new Promise((resolve,reject)=>{
                request.post("",{data},(err,response,body)=>{
                    if(err){
                        reject(err)
                    }else
                    resolve(body)
                })
        }) 
    }
    validateResult(data){
       if(data.length==13){
           return true
       }
       return false
    }
    getData(userId){
        return new Promise((resolve,reject)=>{
 Analyze.find({user:userId},(err,analysis)=>{
                resolve(analysis)
        })
        })
       
    }
    getSpecificData(result){
        return new Promise((resolve,reject)=>{
     
            Analyze.find({result:!result?{$lt:0.75}:{$gte:0.75}},(err,analysis)=>{
                resolve(analysis)
            }).populate("user")
        })
    }

    storeData(data){
        return new Promise((resolve,reject)=>{
            let newAnalysis=new Analyze({...data})
        newAnalysis.save((err,analysis)=>{
            if(err){
                reject(err)
            }else
            resolve(analysis)
        })
    
    });
    }
   

}
module.exports=Analysis