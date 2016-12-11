angular.module('TimeWaste')
.controller('chatCtrl', 
    ['$scope' ,  
    'socket' ,
    '$auth', 
    '$rootScope',
    function($scope,
        socket,
        $auth,
        $rootScope){

        $scope.messages = []

        socket.connect();
        socket.emit('User-Loggedin',$rootScope.activeUser);
        socket.emit('all-Users',{});
        socket.emit('getMessages',{});

        $scope.$on('socket:userList', function(event, data) {
            console.log("userlist---->",data);
            $rootScope.userList = data;
        });

        $scope.$on('socket:userDisconnect', function(event, data) {
            console.log("userDisconnect---->",data);
            $rootScope.userList.splice($rootScope.userList.indexOf(data),1);
            console.log("userlist---->",$rootScope.userList);
        });

        $scope.$on('socket:MessageList', function(event, data) {
            console.log("MessageList ---->",data);
            $scope.messages = data;
        });

        $rootScope.logoutSocket = function(){
            socket.emit('User-Loggedout',$rootScope.activeUser);
        };

        $scope.sendMessage = function(newMsg){
            var Message = {
                "user" : $rootScope.activeUser,
                "msg" : newMsg
            };

            if (newMsg != "") {
                //$scope.messages.push(Message);
                socket.emit('newMessage',Message);
            }

            $scope.newMsg = "";
        };

    }]);