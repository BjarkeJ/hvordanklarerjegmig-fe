app.controller("ctrl", function($scope, benchmarkService) {

    // $scope.cvrNr = '77818111'
    $scope.industry = true
    $scope.area = true
    $scope.employees = true

	$scope.getBenchmark = function () {

    // $scope.cvrNr = '77818111';
    $scope.loading = true;
    $scope.err = false;
    $scope.boxShow = {
      grossProfit: 'none',
      employeeRatio: 'none',
      roi: 'none',
      currentRatio: 'none',
    };

        var params = {
            cvrNr: $scope.cvrNr,
            industry: $scope.industry,
            area: $scope.area,
            employees: $scope.employees
        }
		benchmarkService.get(params, function(err, benchmark) {
        if(err) $scope.err = true;
	    	$scope.benchmark = benchmark;
        $scope.loading = false;
	  	});
	};


});
