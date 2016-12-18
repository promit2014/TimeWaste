angular.module('TimeWaste')
    .controller('homeCtrl', ['$state', '$scope', 'homeService', '$rootScope', function($state, $scope, homeService, $rootScope) {

        $scope.showPic = false;

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

        $scope.getHistory();

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

        $scope.displayPicModal = function(link) {
            $scope.activePicture = link;
            $scope.showPic = true;
        }

        $scope.showDetail = function() {
            $scope.showPic = false;
        }


        $scope.links = [{
            href: "http://www.bolenderinspection.com/wp-content/themes/duotive-fortune/includes/timthumb.php?src=/wp-content/uploads/2012/09/Sample-report_Page_01.jpg&h=1200&w=903&zc=1&q=100",
            title: "Image 1"
        }, {
            href: "https://images.sampletemplates.com/wp-content/uploads/2015/11/25092952/Sample-Template-of-Report-Writing.jpg",
            title: "Image 2"
        }, {
            href: "https://images.template.net/wp-content/uploads/2015/05/Sample-Weekly-Activity-Report-Template.jpg",
            title: "Image 3"
        }, {
            href: "http://www.bolenderinspection.com/wp-content/themes/duotive-fortune/includes/timthumb.php?src=/wp-content/uploads/2012/09/Sample-report_Page_01.jpg&h=1200&w=903&zc=1&q=100",
            title: "Image 1"
        }, {
            href: "https://images.sampletemplates.com/wp-content/uploads/2015/11/25092952/Sample-Template-of-Report-Writing.jpg",
            title: "Image 2"
        }, {
            href: "https://images.template.net/wp-content/uploads/2015/05/Sample-Weekly-Activity-Report-Template.jpg",
            title: "Image 3"
        }, {
            href: "http://www.bolenderinspection.com/wp-content/themes/duotive-fortune/includes/timthumb.php?src=/wp-content/uploads/2012/09/Sample-report_Page_01.jpg&h=1200&w=903&zc=1&q=100",
            title: "Image 1"
        }, {
            href: "https://images.sampletemplates.com/wp-content/uploads/2015/11/25092952/Sample-Template-of-Report-Writing.jpg",
            title: "Image 2"
        }, {
            href: "https://images.template.net/wp-content/uploads/2015/05/Sample-Weekly-Activity-Report-Template.jpg",
            title: "Image 3"
        }, {
            href: "http://www.bolenderinspection.com/wp-content/themes/duotive-fortune/includes/timthumb.php?src=/wp-content/uploads/2012/09/Sample-report_Page_01.jpg&h=1200&w=903&zc=1&q=100",
            title: "Image 1"
        }, {
            href: "https://images.sampletemplates.com/wp-content/uploads/2015/11/25092952/Sample-Template-of-Report-Writing.jpg",
            title: "Image 2"
        }, {
            href: "https://images.template.net/wp-content/uploads/2015/05/Sample-Weekly-Activity-Report-Template.jpg",
            title: "Image 3"
        }, {
            href: "http://www.bolenderinspection.com/wp-content/themes/duotive-fortune/includes/timthumb.php?src=/wp-content/uploads/2012/09/Sample-report_Page_01.jpg&h=1200&w=903&zc=1&q=100",
            title: "Image 1"
        }, {
            href: "https://images.sampletemplates.com/wp-content/uploads/2015/11/25092952/Sample-Template-of-Report-Writing.jpg",
            title: "Image 2"
        }, {
            href: "https://images.template.net/wp-content/uploads/2015/05/Sample-Weekly-Activity-Report-Template.jpg",
            title: "Image 3"
        }, {
            href: "http://www.bolenderinspection.com/wp-content/themes/duotive-fortune/includes/timthumb.php?src=/wp-content/uploads/2012/09/Sample-report_Page_01.jpg&h=1200&w=903&zc=1&q=100",
            title: "Image 1"
        }, {
            href: "https://images.sampletemplates.com/wp-content/uploads/2015/11/25092952/Sample-Template-of-Report-Writing.jpg",
            title: "Image 2"
        }, {
            href: "https://images.template.net/wp-content/uploads/2015/05/Sample-Weekly-Activity-Report-Template.jpg",
            title: "Image 3"
        }];

    }]);
