app.controller("ctrl", function($scope, benchmarkService) {

	$scope.getBenchmark = function () {

    $scope.loading = true;
    $scope.err = false;
    $scope.boxShow = {
      grossProfit: 'none',
      employeeRatio: 'none',
      roi: 'none',
      currentRatio: 'none',
    };

		benchmarkService.get({ cvrNr: $scope.cvrNr }, function(err, benchmark) {
        if(err) $scope.err = true;
	    	$scope.benchmark = benchmark;
        $scope.loading = false;
	  	});
	};


});
