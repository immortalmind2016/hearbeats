const request=require("request")
const Database=require("./config/database");
database.connect("mongodb://immortalmind:0115120323m@ds343985.mlab.com:43985/software_project")
database.connect()
const Analyze=require("../models/Analysis")
// Builder
class Analysis{
    fetchResult(data){
        return request.post("",{data})
    }
    validateResult(data){
       if(data.lenght==13){
           return true
       }
       return false
    }

    storeData(data){
        let newAnalysis=new Analyze({...data})
    }

   

}