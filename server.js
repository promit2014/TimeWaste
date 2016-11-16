var express = require("express");
var http = require("http");
var socketIO = require("socket.io");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var authenticateUser = require("./server/controllers/authentication-controller");

var app = express();

var server = http.createServer(app);

var io = socketIO.listen(server);

io.sockets.on('connection',function(socket){
	socket.on('User-Loggedin',function(data){
		console.log("user logged In : "+data+" with socket id : "+socket.id);
	});
	socket.on('User-Loggedout',function(data){
		console.log("user logged Out : "+data);
	});
	socket.on('disconnect',function(){
		console.log("user disconnected : "+socket.id);
	});
});

var mongo_url = 'mongodb://localhost:27017/time-waste';

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

if (typeof ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            ipaddress = "127.0.0.1";
        };

// if OPENSHIFT env variables are present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_URL) {
	mongo_url = process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME;
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
app.post('/api/user/login',authenticateUser.login);

server.listen(port, ipaddress,function(){
	console.log("Listening on host : "+ipaddress+" and port :"+port);
});
