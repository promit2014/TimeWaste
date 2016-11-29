angular.module('TimeWaste')
.service('socket',['socketFactory',function(socketFactory){

	var socket = socketFactory();
	
	socket.forward('userList');

	return socket;
}]);