angular.module('TimeWaste')
    .service('homeService', ['$http', function($http) {

        var getUserData = function(email) {
            return ($http.post("/userData", { "email": email }));
        };

        var getUserHistory = function(email) {
            return ($http.post("/reports", { "email": email }));
        }

        return {
            getUserData: getUserData,
            getUserHistory: getUserHistory
        };
    }]);
