angular.module('TimeWaste')
    .controller('homeCtrl', ['$state', '$scope' , 'homeService' ,'$rootScope', function($state, $scope , homeService,$rootScope) {
        console.log(" $scope.$parent.userdetails", $scope.$parent.userdetails);
    	if(angular.isUndefined($scope.$parent.userdetails)){
    		var ServiceResponse  = homeService($rootScope.activeUser);
    		ServiceResponse.then(function (res) {
				$scope.$parent.userdetails = res.data;
			});
    	}
    }]);
