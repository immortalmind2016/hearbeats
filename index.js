const request=require("request");
const express=require("express");
const user=require('./routes/api/user')
const index=require('./routes/api/index')
const bodyParser=require("body-parser")
const Database=require("./config/database");
const mongoose=require("mongoose")
const cors=require("cors")
const database=new Database().getInstance();
const Notification=require("./models/Notification")
database.connect("mongodb://immortalmind:0115120323m@ds343985.mlab.com:43985/software_project")
const app=express();
app.use(cors());

app.use(bodyParser.json());


app.use(function(req, res, next) {

     res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET");
    res.setHeader("Access-Control-Max-Age", "3600");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 /*
  res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Authorization, Accept");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,authorization, Accept");


        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
   
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");*/
  next();
});

var http = require( "http" ).createServer( app );
var io = require( "socket.io" )( http );

io.on('connection', function(socket){
  console.log('a user connected');
Notification.prependListener("save", function(result) {
 
socket.emit("test",{email:result.to.email,message:result.message})


})
  console.log(socket.id)
});

io.set('origins', 'http://127.0.0.1:3000');
http.listen(8080, "127.0.0.1");

io.set('origins', 'http://localhost:3000');



app.use("/api",index(io));
app.use("/api/user",user)
app.listen(5000,()=>{
    console.log("Server running on port 5000")
})