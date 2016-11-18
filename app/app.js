
(function(){
	angular.module('TimeWaste',['ui.router','btford.socket-io'])
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/signin');

		$stateProvider.state('signup',{
			url:"/signup",
			templateUrl: "/signup/templates/signup.html",
			controller: "SignupController"
		});

		$stateProvider.state('signin',{
			url:"/signin",
			templateUrl: "/signin/templates/signin.html"
		});

	}]);
}());