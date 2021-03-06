angular.module('TimeWaste')
.controller('LeftCtrl', ['$scope', '$timeout', '$mdSidenav', '$log','$rootScope' ,
    function ($scope, $timeout, $mdSidenav, $log,$rootScope) {
        $rootScope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function(){
            return $mdSidenav('right').isOpen();
        };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
     function debounce(func, wait, context) {
       var timer;

       return function debounced() {
           var context = $scope,
           args = Array.prototype.slice.call(arguments);
           $timeout.cancel(timer);
           timer = $timeout(function() {
               timer = undefined;
               func.apply(context, args);
           }, wait || 10);
       };
   }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
     function buildDelayedToggler(navID) {
        console.log("inside build toggler");
        return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
        .toggle()
        .then(function () {
            $log.debug("toggle " + navID + " is done");
        });
    }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
        .toggle()
        .then(function () {
            $log.debug("toggle " + navID + " is done");
        });
    }
}

$scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
      .then(function () {
          $log.debug("close LEFT is done");
      });

  };
}])