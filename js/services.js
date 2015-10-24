app.factory('benchmarkService', function($resource, $http) {

	return {
		get: function(params, callback) {
			console.log('requesting')
      console.log(params.cvrNr);
      var cvr = params.cvrNr;
			var req = $http({
				method: 'GET',
				url: 'http://ec2-52-28-110-186.eu-central-1.compute.amazonaws.com:4299/metrics/' + cvr + '?industry=' + (params.industry ? 'true' : '') + '&area=' + (params.area ? 'true' : '') + '&employees=' + (params.employees ? 'true' : '')
			}).then(function successCallback(res) {
		    // this callback will be called asynchronously
		    // when the response is available
        callback(null, decorateData(res.data));
		  }, function errorCallback(res) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
        callback('fejl', null);

		  });

		}
	};

	// return {
	// 	get: function(params, callback) {

	// 		var params = {
	// 			branche: true,
	// 			omraade: true,
	// 			antalansatte: true,
	// 		};

	// 		benchmark = {
	// 		  name: 'Hackathon A/S',
	// 		  cvr: 12345678,
	// 		  fiscalYear: '2015',
	// 		  facets: {
	// 		    industry: 'Tandlæger',
	// 		    employees: '1-5',
	// 		    area: 'Sjælland',
	// 		  },
	// 		  metrics: {
 //            grossProfit: {
 //                own: 1234567,
 //                median: 1999999,
 //                rank: 1,
 //                size: 1000,
 //                rating: 1
 //            },
 //            resultBeforeTax: {
 //                own: 1234567,
 //                median: 1999999,
 //                rank: 1,
 //                size: 1000,
 //                rating: 1
 //            },
 //            roi: {
 //                own: 2.7,
 //                median: 1.9,
 //                rank: 1,
 //                size: 1000,
 //                rating: 1
 //            },
 //            currentRatio: {
 //                own: 2.7,
 //                median: 1.9,
 //                rank: 1,
 //                size: 1000,
 //                rating: 1
 //            },
 //            employeeRatio: {
 //                own: 2.7,
 //                median: 1.9,
 //                rank: 1,
 //                size: 1000,
 //                rating: 1
 //            },
 //        },
	// 		  competitors: [
	// 				'Virksomhed 1',
	// 				'Virksomhed 2',
	// 				'Virksomhed 3',
	// 				'Virksomhed 4',
	// 				'Virksomhed 5',
	// 				'Virksomhed 6',
	// 				'Virksomhed 7'
	// 		  ]
	// 		};

	// 		return callback(benchmark);
	// 	}
	// };
});

var areaMap = {
    16: 'København'
}
function decorateData(data) {
    if (areaMap[data.facets.area]) {
        data.facets.area = areaMap[data.facets.area]
    }
    return data
}
