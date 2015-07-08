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

		apiCall.getCityInfo().then(onSuccess, onError);
		apiCall.getThemeInfo().then(onSuccessTheme, onErrorTheme);
		
		// form Data collected here ------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		// then service is called to pass form info to the API
		$scope.submit = function() {
			var flightInfo = {};
			flightInfo.origin = $scope.origin;
			flightInfo.destination = $scope.destination;
			flightInfo.departuredate = $scope.departuredate;
			flightInfo.returndate = $scope.returndate;

			apiCall.getFlights(flightInfo).then(onSuccessFlights, onErrorFlights);
		}

	})
})();