angular.module('TimeWaste')
    .controller('homeCtrl', ['$state', '$scope', 'homeService', '$rootScope', function($state, $scope, homeService, $rootScope) {

        this.showPrescriptionDetailFlag = false;
        this.activePrescription = {};

        if (angular.isUndefined($scope.$parent.userdetails)) {
            var getUserDataResponse = homeService.getUserData($rootScope.activeUser);
            getUserDataResponse.then(function(res) {
                $scope.$parent.userdetails = res.data;
            });
        };

        $scope.getHistory = function() {
            var getUserHistoryResponse = homeService.getUserHistory($rootScope.activeUser);
            getUserHistoryResponse.then(function(res) {
                console.log("histories from service ---->", res.data);
                $scope.UserHistories = res.data;
            });
        };

        $scope.getHistory();

        $scope.updateProPic = function(newPicUrl) {
            var updateProfilePicResponse = homeService.updateProfilePic($rootScope.activeUser, newPicUrl);
            updateProfilePicResponse.then(function(res) {
                $scope.$parent.userdetails.profilepic = newPicUrl;
                $scope.newPicUrl = "";
            });
        };

        $scope.test = function() {
            console.log('test');
        }

    }]);
