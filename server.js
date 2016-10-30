var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var authenticateUser = require("./server/controllers/authentication-controller");

var app = express();

var mongo_url = 'mongodb://localhost:27017/time-waste';
// if OPENSHIFT env variables are present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_URL) {
	mongo_url = process.env.OPENSHIFT_MONGODB_DB_URL +
	process.env.OPENSHIFT_APP_NAME;
}

mongoose.connect(mongo_url);

app.use(bodyParser.json());

app.use('/', express.static(__dirname+'/app'));
app.use('/',express.static(__dirname+'/bower_components'));

app.get('/',function(req,res){
	//res.sendFile('index.html');
	res.sendFile(__dirname + '/app/index.html');
});

//authentication
app.post('/api/user/signup',authenticateUser.signup);

app.listen('8081',function(){
	console.log("Listening for localhost 3000");
});
