
const mongoose=require("mongoose")
class Database{
    constructor(){
        this.url=""
    }
    connect(url){
        this.url=url
        mongoose.connect(url)
    }
    status(){
        console.log("Database Connected to "+this.url)
    }

    
    
}
// We can Remove this class because Nodejs Do it internaly save Instance of Database TO cache and use it for every call of class
// but use new Database().getInstance() in index only;

class Singleton{
 constructor(){
     if(!Singleton.instance){
         Singleton.instance=new Database();
     }
 }
 getInstance(){
     return Singleton.instance
 }
}
module.exports=Singleton