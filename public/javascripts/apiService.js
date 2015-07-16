(function(){
	var apiCall = function($http) {

		var tmpAirportCode = [];
		var airportInfo = {};

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
			var origin = flightData.origin.toUpperCase();
			var destination = flightData.destination.toUpperCase();
			var departuredate = flightData.departuredate;
			var returndate = flightData.returndate;
			// alert("Inside getFlights-----//depart: " + departuredate)
			console.log("api origin: " + origin + " api destination: " + destination + " api departuredate: " + departuredate + " api returndate: "  + returndate);
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

		var getAirportCity = function(airportCode){
			console.log("service call | airport code: " + airportCode);
console.log("array: " + tmpAirportCode.indexOf(airportCode))

			if ( tmpAirportCode.indexOf(airportCode) )
			{
				return null;
			}

			tmpAirportCode.push(airportCode);

			// return $http.get('/themes-outdoors')
			// 				.then(function(response){
			// 		return response.data;
			// 	});

			
			return $http.post('/airport_code', {airport_code: airportCode})
				.then(function(response){
					
					return response.data;
				})
		}

		return{
			getCityInfo: getCityInfo,
			getThemeInfo: getThemeInfo,
			getFlights: getFlights,
			getAirportCity: getAirportCity
			
		};
	}
	// angular.module('app').controller('apiCtrl', function($scope,$routeParams,$location))

	var module = angular.module('app');
	module.factory('apiCall',apiCall)
})();