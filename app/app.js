
(function(){
	angular.module('TimeWaste',['ui.router'])
	.config(['$stateProvider',function($stateProvider) {
		$stateProvider.state('signup',function(){
			url:"/signup",
			templateUrl: "app/signup/signup.html",
			controller: "SignupController"
		});
	}]);
}());