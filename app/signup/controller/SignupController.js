angular.module('TimeWaste')
.controller('SignupController', ['$state' , '$scope' , '$http' , function($state,$scope,$http){
	//console.log("Inside of Signup controller");
	$scope.createUser = function(){
		$http.post('/api/user/signup',$scope.user).success(function(res){
			$scope.successful = true;
			$scope.errorOut = false;
		}).error(function(res){
			$scope.errorOut = true;
			$scope.successful = false;
		});
	}
}])