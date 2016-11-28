
(function(){angular.module('TimeWaste')
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

		$urlRouterProvider.otherwise('/signin');

    /**
     * Helper auth functions
     */
     var skipIfLoggedIn = ['$q', '$auth' , '$location', function($q, $auth , $location) {
     	var deferred = $q.defer();
     	if ($auth.isAuthenticated()) {
     		//deferred.reject();
     		$location.path('/dashboard');
     	} else {
     		deferred.resolve();
     	}
     	return deferred.promise;
     }];

     var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
     	var deferred = $q.defer();
     	if ($auth.isAuthenticated()) {
     		deferred.resolve();
     	} else {
     		$location.path('/signin');
     	}
     	return deferred.promise;
     }];



     $stateProvider.state('signup',{
     	url:"/signup",
     	templateUrl: "/signup/templates/signup.html",
     	controller: "SignupController",
     	resolve: {
     		skipIfLoggedIn: skipIfLoggedIn
     	}
     });

     $stateProvider.state('signin',{
     	url:"/signin",
     	templateUrl: "/signin/templates/signin.html",
     	resolve: {
     		skipIfLoggedIn: skipIfLoggedIn
     	}
     });

     $stateProvider.state('dashboard',{
     	url:"/dashboard",
     	templateUrl:"/dashboard/templates/dashboard.html",
     	resolve: {
     		loginRequired: loginRequired
     	}
     })

 }]);
}());