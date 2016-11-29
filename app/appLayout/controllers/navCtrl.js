angular.module('TimeWaste')
.controller('navCtrl', 
    ['$state',
    '$scope' , 
    '$http' , 
    'socket' ,
    '$auth', 
    '$log',
    'Flash', 
    '$rootScope',
    function($state,$scope,$http,socket,$auth,$log,Flash,$rootScope){

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
                	$log.info('login success response --->', response.data.email);
                	socket.connect();
                	socket.emit('User-Loggedin',response.data.email);
                    socket.emit('all-Users',{});
                    /*socket.on('userList',function(userlist){
                        console.log("userlist ---->",userlist);
                    });*/

                    //=========================================================================
                   /* $scope.$on('socket:broadcast', function(event, data) {
                        $log.debug('got a message', event.name);
                        if (!data.payload) {
                            $log.error('invalid message', 'event', event, 
                                'data', JSON.stringify(data));
                            return;
                        } 
                        $scope.$apply(function() {
                            $scope.messageLog = messageFormatter(
                                new Date(), data.source, 
                                data.payload) + $scope.messageLog;
                        });
                    });*/


                    $scope.$on('socket:userList', function(event, data) {
                        console.log("userlist---->"+event,data);
                    });

                    //=========================================================================
                    $state.go('dashboard');
                }).catch(function(response) {
                	var message = '<strong>'+response.data.error+'</strong>';
                	var id = Flash.create('danger', message);
                	$log.error('Login Failed ---->', response);
                });
            };
        }]);