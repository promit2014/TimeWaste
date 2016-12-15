var passport = require("passport");
var jwt = require("jsonwebtoken");
var config = require("../config/configurations");
var mongoose = require('mongoose');
var User = require('../datasets/user');
var UserHistory = require('../datasets/userHistory');
var async = require('async');

var passportinit = passport.initialize();

var signupProcessor = function(req, SuccessCB, ErrorCB) {

    var newUser = new User({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        age: req.body.age,
        gender: req.body.gender,
        mobile: req.body.mobile,
        city: req.body.city,
        country: req.body.country,
        password: req.body.password
    });

    var newUserHistory = new UserHistory({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        age: req.body.age,
        gender: req.body.gender,
        mobile: req.body.mobile,
        city: req.body.city,
        country: req.body.country
    });

    async.series({
        one: function(callback) {
            newUser.save(function(err, data) {
                if (err) {
                    console.log("error was there in newUser Creation", err);
                    callback(err, null);
                } else {
                    console.log("data successfully saved", data);
                    //SuccessCB({ "success": "created successfully" });
                    callback(null, data);
                }
            });
        },
        two: function(callback) {
            newUserHistory.save(function(err, data) {
                if (err) {
                    console.log("error was there in newUserHistoryCreation", err);
                    callback(err, null);
                } else {
                    console.log("data successfully saved",data);			
                    //SuccessCB({ "success": "created successfully" });
                    callback(null, data);
                }
            });
        }
    }, function(err, results) {
        // results is now equal to: {one: 1, two: 2}
        if (err) {
        	ErrorCB(err);
        }else{
        	SuccessCB({ "success": "created successfully" });
        }
    });

};

var loginProcessor = function(req, SuccessCB, ErrorCB, notFoundCB) {
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) {
            console.log("Error Out when Sign In --> ", err);
            ErrorCB({ error: "Error Occured During Login" });
        };

        console.log("data----->", user);

        if (!user) {
            notFoundCB({ error: "User Not Found" });
        } else {
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (isMatch && !err) {
                    var authToken = jwt.sign({ user: user.email }, config.secret, {
                        expiresIn: 10080 //seconds
                    });
                    SuccessCB({ email: user.email, firstname: user.firstname, lastname: user.lastname, dob: user.dob, age: user.age, gender: user.gender, mobile: user.mobile, city: user.city, country: user.country, profilepic: user.profilepic, authToken: 'JWT ' + authToken });
                } else {
                    notFoundCB({ error: "Password Doesnot match" });
                }
            });
        };
    });
}

module.exports = {
    signupProcessor: signupProcessor,
    loginProcessor: loginProcessor
}
