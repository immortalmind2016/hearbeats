const request=require("request");
const express=require("express");
const user=require('./routes/api/user')
const index=require('./routes/api/index')
const bodyParser=require("body-parser")
const Database=require("./config/database");
const mongoose=require("mongoose")
const database=new Database().getInstance();
mongoose.connect("mongodb://immortalmind:0115120323m@ds343985.mlab.com:43985/software_project")
const app=express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use("/api/index",index);
app.use("/api/user",user)
app.listen(5000,()=>{
    console.log("Server running on port 5000")
})