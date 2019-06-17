

module.exports=(io)=>{
    const Router=require("express").Router();

const passport=require("../../config/auth")
const indexController=require("../../controllers/index")
/*
@url : /api/analyze
@method :post
@params: NULL
@desc : analyze patient status
@type : private
@required body :  exang, oldpeak....   - e.g ( data : {oldpeak,exang})
@response : json ({success:true,result:(0 or 1)}) - store it in localStorage

*/
Router.post("/analyze",passport.authenticate("login",{session:false}),indexController.analyze);  //post 


/*
@url : /api/
@method :get
@params: NULL
@desc : get analysis history
@type : private
@required body : NULL
@response : json ({success:true,analysis:ArrayOfAnalysis}) - store it in localStorage

*/
Router.get("/",passport.authenticate("login",{session:false}),indexController.getAnalysis);  //get 


/*
@url : /api/sent-notification
@method :post
@params: NULL
@desc : login
@type : publoc
@required body : email , password   - e.g ( data : {email,passowrd})
@response : json ({token:"your token"}) - store it in localStorage

*/
io.on('connection', function(socket){
  console.log('a user connected');

  console.log(socket.id)
})
Router.post("/send-notification",passport.authenticate("login",{session:false}),indexController.sendNotification);  //post 


Router.get("/notifications",passport.authenticate("login",{session:false}),indexController.notifications); 
Router.get("/analysis",passport.authenticate("login",{session:false}),indexController.getStatic);  //get 
return Router
}
