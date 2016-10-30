var mongoose = require('mongoose');
var User = require('../datasets/user');

var signup = function(req,res){
	var user = new User(req.body);
	user.save(function(err, data){
		if(err){
			console.log("error was there", err);
			res.status(500).json({"success":"created successfully"});
		}else{
			console.log("data success fully saved",data);
		}
	});
	res.status(201).json({"success":"created successfully"});
}

module.exports = {
	signup : signup
}