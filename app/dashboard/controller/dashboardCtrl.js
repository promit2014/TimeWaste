angular.module('TimeWaste')
.controller('dashboardCtrl', 
    ['$scope' ,  
    'socket' ,
    '$auth', 
    '$rootScope',
    function($scope,
        socket,
        $auth,
        $rootScope){


        socket.connect();
        socket.emit('User-Loggedin',$rootScope.activeUser);
        socket.emit('all-Users',{});

        $scope.$on('socket:userList', function(event, data) {
            console.log("userlist---->",data);
            $rootScope.userList = data;
        });

        $scope.$on('socket:userDisconnect', function(event, data) {
            console.log("userDisconnect---->",data);
            $rootScope.userList.splice($rootScope.userList.indexOf(data),1);
            console.log("userlist---->",$rootScope.userList);
        });

        $rootScope.logoutSocket = function(){
            socket.emit('User-Loggedout',$rootScope.activeUser);
        }

    }]);