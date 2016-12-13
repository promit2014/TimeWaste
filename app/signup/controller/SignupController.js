angular.module('TimeWaste')
.controller('SignupController', ['$state' , '$scope' , '$http' ,'$auth' , 'Flash', function($state,$scope,$http,$auth,Flash){
	//console.log("Inside of Signup controller");
	$scope.createUser = function(){
		$auth.signup({
			email: $scope.user.email,
			firstname:$scope.user.firstname,
			lastname:$scope.user.Lastname,
			dob:$scope.user.dob,
			age:$scope.user.age,
			gender:$scope.user.gender,
			mobile:$scope.user.mobile,
			city:$scope.user.city,
			country:$scope.user.country,
			password: $scope.user.password
		}).then(function() {
			var message = '<strong>Registration Successfull</strong>';
			var id = Flash.create('success', message);

			$scope.successful = true;
			$scope.errorOut = false;
		})
		.catch(function() {
			$scope.errorOut = true;
			$scope.successful = false;
		});
	};
}])