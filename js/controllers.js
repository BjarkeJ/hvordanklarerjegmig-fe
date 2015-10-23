app.controller("ctrl", function($scope, benchmarkService) {
	
	$scope.getBenchmark = function () {
		benchmarkService.get({ cvrNr: $scope.cvrNr }, function(benchmark) {
	    	$scope.benchmark = benchmark;
	  	});
	}


});
