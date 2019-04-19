
const  passport=require("passport")

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const User=require("../models/User")

var opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


passport.use("login",new JwtStrategy(opts, function(jwt_payload, done) {

    let data=jwt_payload

        User.findOne({email:data.email,password:data.password}).then((user)=>{
         done(null,user)
    }).catch((err)=>{
        console.log(err)
          done({err:"not found"})
         })


}))

module.exports=passport