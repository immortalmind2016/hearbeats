
const  passport=require("passport")

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const User=require("../models/User")

var opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


passport.use("login",new JwtStrategy(opts, function(jwt_payload, done) {

    let data=jwt_payload 
    console.log("JWT ",data)

        User.findOne({email:data.email,password:data.password},(err,user)=>{
            console.log(user ,"USER")
      if(!err){
    return done(null,user)
        
      }
     
        console.log(err)
          done({err:"not found"})
         })


}))

module.exports=passport