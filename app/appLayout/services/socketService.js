angular.module('TimeWaste')
.service('socket',function(){
	var socket = io.connect('/');
	return socket;
});