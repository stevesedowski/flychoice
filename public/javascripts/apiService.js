(function(){
	var apiCall = function($http) {

		var getCityInfo = function(){
			return $http.get('/cities')
				.then(function(response){
					return response.data.Cities;
				});
		};

		var getThemeInfo = function() {
			return $http.get('/themes')
				.then(function(response){
					return response.data.Themes;
				});
		}

		var getFlights = function(flightData){
			var origin = flightData.origin;
			var destination = flightData.destination;
			var departuredate = flightData.departuredate;
			var returndate = flightData.returndate;
			// alert("origin: " + origin + " destination: " + destination + " departuredate: " + departuredate + " returndate: "  + returndate)
			// alert(Object.getOwnPropertyDescriptor(flightData));
			// return $http.post('/flights', {params:{"origin": origin, "destination": destination, "departuredate": departuredate, "returndate": returndate}})
			return $http.post('/flights', {origin: origin, destination: destination, departuredate: departuredate, returndate: returndate})
				.then(function(response){
					return response.data;
				})
			// return $http.get('/flights/:origin/:destination/:departuredate/:returndate')
			// 	.then(function(response){
			// 		return response.data;
			// 	})
		}

		return{
			getCityInfo: getCityInfo,
			getThemeInfo: getThemeInfo,
			getFlights: getFlights
		};
	}
	// angular.module('app').controller('apiCtrl', function($scope,$routeParams,$location))

	var module = angular.module('app');
	module.factory('apiCall',apiCall)
})();