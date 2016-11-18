angular.module('TimeWaste')
.controller('navCtrl', ['$state','$scope' , '$http' , 'socket', function($state,$scope,$http,socket){
	$scope.$parent.logUserIn = function(user){
		$http.post('/api/user/login', user).success(function(response){
			console.log("successfully logged in",response);
			localStorage.setItem('User-Data',JSON.stringify(response));
			socket.connect();
			socket.emit('User-Loggedin',response.email);
		}).error(function(response){
			console.log("some error in logging in",response);
		});
	}
}]);