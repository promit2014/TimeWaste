angular.module('TimeWaste')
.service('homeService',['$http',function($http){

	var getUserData = function(email){
		return ($http.post("/userData",{"email":email}));
	};
	return getUserData;
}]);