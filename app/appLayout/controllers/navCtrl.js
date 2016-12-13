angular.module('TimeWaste')
    .controller('navCtrl', ['$state',
        '$scope',
        '$http',
        'socket',
        '$auth',
        '$log',
        'Flash',
        '$rootScope',
        function($state,
            $scope,
            $http,
            socket,
            $auth,
            $log,
            Flash,
            $rootScope) {

            $scope.$parent.isAuthenticated = function() {
                return $auth.isAuthenticated();
            };

            $scope.logout = function() {
                $rootScope.logoutSocket;
                $auth.logout();
                $state.go('signin');
            }

            $scope.$parent.logUserIn = function(user) {
                $auth.login({
                    // username of the user entered in the login form
                    email: user.email,
                    // username of the user entered in the login form
                    password: user.password
                }).then(function(response) {
                    $log.info('login success response --->', response.data.email);
                    $rootScope.activeUser = response.data.email;
                    $scope.$parent.userdetails={
                        email:response.data.email,
                        firstname:response.data.firstname,
                        lastname:response.data.lastname,
                        dob:response.data.dob,
                        age:response.data.age,
                        gender:response.data.gender,
                        mobile:response.data.mobile,
                        city:response.data.city,
                        country:response.data.country
                    }
                    $state.go('home');
                }).catch(function(response) {
                    var message = '<strong>' + response.data.error + '</strong>';
                    var id = Flash.create('danger', message);
                    $log.error('Login Failed ---->', response);
                });
            };
        }
    ]);
