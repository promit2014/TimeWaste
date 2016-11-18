var socketIO = require("socket.io");
var connectedSockets = {};

var addSocket = function(serverInstance){

	var io = socketIO.listen(serverInstance);

	io.sockets.on('connection',function(socket){

		socket.on('User-Loggedin',function(data){
			console.log("user logged In : "+data+" with socket id : "+socket.id);
			connectedSockets[socket] = data ;
		});

		socket.on('User-Loggedout',function(data){
			delete connectedSockets[socket];
			console.log("user logged Out : "+data);
		});

		socket.on('disconnect',function(){
			console.log("user disconnected : "+socket.id);
			delete connectedSockets[socket];
		});

	});
};

module.exports = {
	addSocket:addSocket
}
