const LocalStrategy = require('passport-local').Strategy;
<<<<<<< HEAD
const bcrypt = require('bcryptjs');
=======
const bcrypt = require('bcrypt');
>>>>>>> 4d22bf770092ee89ed6ffe5b4ed90b47299b6d13
const User = require("../models/user");



<<<<<<< HEAD
module.exports = function (passport) {
    passport.use(
        new LocalStrategy({
            usernameField: 'email'
        }, (email, password, done) => {
            //match user
            User.findOne({
                    email: email
                })
                .then((user) => {
                    if (!user) {
                        return done(null, false, {
                            message: 'The email you entered is not registered'
                        });
                    }
                    //match pass
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, {
                                message: 'The password you entered is incorrect'
                            });
                        }
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        })

    )
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};
=======
module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField : 'email'},(email,password,done)=> {
                //match user
                User.findOne({email : email})
                .then((user)=>{
                 if(!user) {
                     return done(null,false,{message : 'that email is not registered'});
                 }
                 //match pass
                 bcrypt.compare(password,user.password,(err,isMatch)=>{
                     if(err) throw err;

                     if(isMatch) {
                         return done(null,user);
                     } else {
                         return done(null,false,{message : 'pass incorrect'});
                     }
                 })
                })
                .catch((err)=> {console.log(err)})
        })
        
    )
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      }); 
}; 
>>>>>>> 4d22bf770092ee89ed6ffe5b4ed90b47299b6d13
