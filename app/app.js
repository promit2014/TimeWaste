
(function(){
	angular.module('TimeWaste',['ui.router','btford.socket-io'])
	.config(['$stateProvider',function($stateProvider) {
		$stateProvider.state('signup',{
			url:"/signup",
			templateUrl: "/signup/templates/signup.html",
			controller: "SignupController"
		});
	}]);
}());