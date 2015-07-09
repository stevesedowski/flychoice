(function(){
	angular.module('app').controller('mainCtrl', function($scope, $http, apiCall, $routeParams){
		$scope.api = "working..."

		$scope.origin = "lax";
		$scope.destination = "ord";
		$scope.departuredate = "2015-08-01";
		$scope.returndate = "2015-08-12";

		var onSuccessFlights = function(data){
			$scope.flights = data.PricedItineraries;
			console.log($scope.flights);
		};

		var onErrorFlights = function(error) {
			$scope.error = error;
		}

		var onSuccess = function(data){
			$scope.cities = data;
		};

		var onError = function(error) {
			$scope.error = error;
		}

		var onSuccessTheme = function(data){
			$scope.themes = data;
		};

		var onErrorTheme = function(error) {
			$scope.error = error;
		}

		 // apiCall.getCityInfo().then(onSuccess, onError);
		 // apiCall.getThemeInfo().then(onSuccessTheme, onErrorTheme);
		
		// form Data collected here ------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		
		$scope.submit = function() {
			var flightInfo = {};

			// collect input form informaiton into an object
			var origin = $('#originAirport');
			var destination = $('#destinationAirport');

			// extract just the airport code from the input information
			var originAirport  = origin.val().substring(0,3);
			var destinationAirport = destination.val().substring(0,3);

			// populate flightInfo object
			flightInfo.destination = destinationAirport;
			flightInfo.departuredate = $scope.departuredate;
			flightInfo.returndate = $scope.returndate;
			flightInfo.origin = originAirport;

			// then service is called to pass form info to the API
			apiCall.getFlights(flightInfo).then(onSuccessFlights, onErrorFlights);
		}

	})
})();