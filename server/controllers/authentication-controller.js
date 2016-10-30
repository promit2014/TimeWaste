var mongoose = require('mongoose');
var User = require('../datasets/user');

var signup = function(req,res){
	var user = new User(req.body);
	user.save();
	res.json({"success":"created successfully"});
}

module.exports = {
	signup : signup
}