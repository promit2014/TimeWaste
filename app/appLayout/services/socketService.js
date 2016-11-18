angular.module('TimeWaste')
.service('socket',['socketFactory',function(socketFactory){
	return socketFactory();
}]);