angular.module('TimeWaste')
.controller('navCtrl', 
    ['$state',
    '$scope' , 
    '$http' , 
    'socket' ,
    '$auth', 
    '$log',
    'Flash', 
    function($state,$scope,$http,socket,$auth,$log,Flash){

        $scope.$parent.isAuthenticated = function() {
          return $auth.isAuthenticated();
      };

      $scope.logout = function(){
        $auth.logout();
        $state.go('signin');
    }

    $scope.$parent.logUserIn = function(user){
      $auth.login({
                    // username of the user entered in the login form
                    email: user.email,
                    // username of the user entered in the login form
                    password: user.password
                }).then(function(response) {
                	$log.info('login success response --->', response);
                	socket.connect();
                	socket.emit('User-Loggedin',response.email);
                    $state.go('dashboard');
                }).catch(function(response) {
                	var message = '<strong>'+response.data.error+'</strong>';
                	var id = Flash.create('danger', message);
                	$log.error('Login Failed ---->', response);
                });
            };
        }]);