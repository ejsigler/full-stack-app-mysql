
// config/passport.js
var bcrypt = require('bcrypt-nodejs');

var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var db = require('../models');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.annotation_id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        db.users.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    function generateHash(password, cb) {
        console.log(password);
        console.log(err, salt);
        bcrypt.hash(password, 8, null, cb);
    }

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        db.users.findOne({ where: {email : email }}).then(user => {
            // console.log(err);
            // // if there are any errors, return the error
            // if (err)
            //     return done(err);

            // check to see if theres already a user with that email
            
            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

                // if there is no user with that email
                // create the user
                var newUser            = new db.users();

                // set the user's local credentials
                newUser.email    = email;
                

                generateHash(password, function(err, hash) {
                    console.log('hash:', hash);

                    if(err) {
                        console.log(err);
                        done(err);
                    }

                    newUser.password = hash;

                    // save the user
                    newUser.save().then(function(err) {
                        done(err, newUser);
                    });
                });                
            }
        });    

        });

    }));

  
// =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        db.users.findOne({ where: { email : email }}).then(function(user) {
            console.log(user ? user.password: 'not found');

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            console.log('validate pass!', password, user.password);
            user.validPassword(password, function(err, valid) {
                console.log('compare donex!', err, valid, (valid ? user.get() : null));

                done(err, (valid ? user.get() : null));
            });
        });

    }));

};
  