angular.module('TimeWaste')
.service('socket',['socketFactory',function(socketFactory){

	var socket = socketFactory();

	socket.forward('userList');
	socket.forward('userDisconnect');
	socket.forward('MessageList');
	return socket;
}]);