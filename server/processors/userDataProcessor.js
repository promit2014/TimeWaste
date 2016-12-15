var config = require("../config/configurations");
var mongoose = require('mongoose');
var User = require('../datasets/user');
var UserHistory = require('../datasets/userHistory');


var userDataProcessor = function(req, SuccessCB, ErrorCB, notFoundCB) {
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) {
            console.log("Error Out when Sign In --> ", err);
            ErrorCB({ error: "Error Occured During Login" });
        };
        console.log("userDataProcessor----->", user);
        SuccessCB(user);
    });
};

var userHistoryUpdator = function(req, SuccessCB, ErrorCB, notFoundCB) {
    UserHistory.findOneAndUpdate({ email: req.body.email }, { $push: { reports: req.body.report } }, { safe: true, upsert: true, new: true }, function(err, user) {
        if (err) {
            console.log("Error Out when Sign In --> ", err);
            ErrorCB({ error: "Error Occured During Login" });
        };
        console.log("userDataProcessor----->", user);
        SuccessCB(user);
    });
};

module.exports = {
    userDataProcessor: userDataProcessor,
    userHistoryUpdator: userHistoryUpdator
};
