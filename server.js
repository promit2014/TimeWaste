var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();

mongoose.connect('mongodb://localhost:27017/time-waste');

app.use('/', express.static(__dirname+'/app'));
app.use('/',express.static(__dirname+'/bower_components'));

app.get('/',function(req,res){
	//res.sendFile('index.html');
	res.sendFile(__dirname + '/app/index.html');
});



app.listen('8081',function(){
	console.log("Listening for localhost 3000");
});
