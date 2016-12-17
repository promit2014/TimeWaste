angular.module('TimeWaste')
    .controller('homeCtrl', ['$state', '$scope', 'homeService', '$rootScope', function($state, $scope, homeService, $rootScope) {

        console.log(" $scope.$parent.userdetails", $scope.$parent.userdetails);


        if (angular.isUndefined($scope.$parent.userdetails)) {
            var getUserDataResponse = homeService.getUserData($rootScope.activeUser);
            getUserDataResponse.then(function(res) {
                $scope.$parent.userdetails = res.data;
            });
        };

        $scope.getHistory = function() {
            var getUserHistoryResponse = homeService.getUserHistory($rootScope.activeUser);
            getUserHistoryResponse.then(function(res) {
                $scope.UserHistories = res.data.reports;
            });
        };

        $scope.updateProPic = function(newPicUrl) {
            var updateProfilePicResponse = homeService.updateProfilePic($rootScope.activeUser, newPicUrl);
            updateProfilePicResponse.then(function(res) {
                $scope.$parent.userdetails.profilepic = newPicUrl;
                $scope.newPicUrl = "";
            });
        }

        $scope.reportDetailsPopulator = function(history) {
            $scope.reportDetails = history;
        }

        $scope.getHistory();

    }]);
