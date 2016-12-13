var config = require("../config/configurations");
var mongoose = require('mongoose');
var User = require('../datasets/user');


var userDataProcessor = function(req,SuccessCB,ErrorCB,notFoundCB){
	User.findOne({email : req.body.email} , function(err , user){
		if(err){
			console.log("Error Out when Sign In --> ",err);
			ErrorCB({error:"Error Occured During Login"});
		};
		console.log("userDataProcessor----->",user);
		SuccessCB(user);
	});
};
module.exports={
	userDataProcessor:userDataProcessor
}