angular.module('TimeWaste')
.controller('navCtrl', ['$state','$scope' , '$http' , 'socket', function($state,$scope,$http,socket){
	$scope.logUserIn = function(){
		$http.post('/api/user/login', $scope.user).success(function(response){
			console.log("successfully logged in",response);
			localStorage.setItem('User-Data',JSON.stringify(response));
			socket.emit('User-Loggedin',response.email);
		}).error(function(response){
			console.log("some error in logging in",response);
		});
	}
}])