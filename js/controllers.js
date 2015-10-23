app.controller("ctrl", function($scope, benchmarkService) {

	$scope.getBenchmark = function () {

    $scope.loading = true;

		benchmarkService.get({ cvrNr: $scope.cvrNr }, function(benchmark) {
	    	$scope.benchmark = benchmark;
        $scope.loading = false;
	  	});
	};


});
