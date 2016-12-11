
(function(){angular.module('TimeWaste')
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

		$urlRouterProvider.otherwise('/signin');

    /**
     * Helper auth functions
     */
      var skipIfLoggedIn = ['$q', '$auth' , '$location' , '$rootScope' , function($q, $auth , $location , $rootScope) {
           	var deferred = $q.defer();
           	if ($auth.isAuthenticated()) {
                     $rootScope.activeUser = $auth.getPayload().user;
                     $location.path('/chat');
                } else {
                  deferred.resolve();
             }
             return deferred.promise;
        }];

        var loginRequired = ['$q', '$location', '$auth' , '$rootScope', function($q, $location, $auth, $rootScope) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                $rootScope.activeUser = $auth.getPayload().user;
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

    $stateProvider.state('chat',{
         url:"/chat",
         templateUrl:"/chat/templates/chat.html",
         controller:"chatCtrl",
         resolve: {
           loginRequired: loginRequired
        }
      });

      }]);
  }());