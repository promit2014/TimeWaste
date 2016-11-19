
(function(){angular.module('TimeWaste')
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