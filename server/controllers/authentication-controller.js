var mongoose = require('mongoose');
var User = require('../datasets/user');

var signup = function(req,res){
	var user = new User(req.body);
	user.save(function(err, data){
		if(err){
			console.log("error was there", err);
			res.status(500).json({"error":"Error Occured"});
		}else{
			console.log("data success fully saved",data);			
			res.status(201).json({"success":"created successfully"});
		}
	});
};

var login = function(req,res){
	User.find(req.body , function(err , results){
		if(err){
			console.log("Error Out",err);
			res.status(500).json({"error":"Error Occured"});
		}else if(results.length > 0){
			res.status(200).json({email : req.body.email});
		}
	});
}

module.exports = {
	signup : signup,
	login:login
}