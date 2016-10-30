
(function(){
	angular.module('TimeWaste',['ui.router'])
	.config(['$stateProvider',function($stateProvider) {
		$stateProvider.state('signup',{
			url:"/signup",
			templateUrl: "/signup/templates/signup.html",
			controller: "SignupController"
		});
	}]);
}());