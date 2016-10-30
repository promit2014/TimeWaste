angular.module('TimeWaste')
.controller('SignupController', ['$state' , '$scope' , '$http' , function($state,$scope,$http){
	//console.log("Inside of Signup controller");
	$scope.createUser = function(){
		$http.post('/api/user/signup',$scope.user).success(function(res){
			console.log("success");
		}).error(function(res){
			console.log("error");
		});
	}
}])