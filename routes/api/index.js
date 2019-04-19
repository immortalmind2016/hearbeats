


const Router=require("express").Router();

const passport=require("../../config/auth")
const indexController=require("../../controllers/index")
/*
@url : /api/index/analyze
@method :post
@params: NULL
@desc : analyze patient status
@type : private
@required body :  exang, oldpeak....   - e.g ( data : {oldpeak,exang})
@response : json ({success:true,result:(0 or 1)}) - store it in localStorage

*/
Router.post("/analyze",passport.authenticate("login",{session:false}),indexController.analyze);  //get 


/*
@url : /api/index/
@method :get
@params: NULL
@desc : get analysis history
@type : private
@required body : NULL
@response : json ({success:true,analysis:ArrayOfAnalysis}) - store it in localStorage

*/
Router.get("/",passport.authenticate("login",{session:false}),indexController.getAnalysis);  //get 


module.exports=Router