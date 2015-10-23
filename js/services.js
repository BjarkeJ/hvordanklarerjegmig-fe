app.factory('benchmarkService', function($resource) {
	

	// return $resource('/');

	return {
		get: function(cvrNr, callback) {

			var benchmark = {
				nogletal1: 123,
				nogletal2: 234,
				nogletal3: 345,
				nogletal4: 567
			};
			return callback(benchmark);
		}
	}
});