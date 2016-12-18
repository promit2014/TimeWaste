angular.module('TimeWaste').component('prescriptionDetail', {
    templateUrl: '/components/prescriptionDetailComponent/templates/prescriptionDetailView.html',
    controller: prescriptionDetailController,
    bindings: {
        reportArray: '=',
        showflag: '='
    }
});

function prescriptionDetailController($scope) {
    console.log("inside prescriptionDetail component controller ---->");

    $scope.showPic = false;

    $scope.reportDetailsPopulator = function(history) {
        $scope.reportDetails = history;
        $scope.showPic = false;
    }

    $scope.displayPicModal = function(link) {
        $scope.activePicture = link;
        $scope.showPic = true;
    }

    $scope.showDetail = function() {
        $scope.showPic = false;
    }
}
