


const Router=require("express").Router();

const passport=require("../../config/auth")
const userController=require("../../controllers/user")
/*
@url : /api/user/signup
@method :Post
@params: NULL
@desc : create or signup new user
@type :Public
@required body : email , password , type : 0 or 1 (1 for doctor , 0 for patient)  - e.g ( data : {email,passowrd,type})
@response : Ok or json (success:true , error : "error desc")

*/
Router.post("/signup",userController.signup);  
/*
@url : /api/user/
@method :get
@params: NULL
@desc : get data of current user
@type : private
@required body :Null
@response : json ( User Data ) - e.g (user:{email,password,type})

*/
Router.get("/",passport.authenticate("login",{session:false}),userController.current);  //get 
/*
@url : /api/user/login
@method :post
@params: NULL
@desc : login
@type : publoc
@required body : email , password   - e.g ( data : {email,passowrd})
@response : json ({token:"your token"}) - store it in localStorage

*/
Router.post("/login",userController.login);  //post 


module.exports=Router