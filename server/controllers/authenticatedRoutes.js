var router = require("express").Router();

var autheticatedrouter = function(passport){
	router.get('/authenticated', passport.authenticate('jwt',{session:false}),function(req,res){
		res.json({msg:"access granted"});
	});

	return router;
}

module.exports=autheticatedrouter;