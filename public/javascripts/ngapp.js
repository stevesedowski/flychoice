(function(){
	var app = angular.module('app', ['ngRoute','directives.customvalidation.customValidationTypes', 'ui.grid', 'infinite-scroll']);

	// define routes here....
	app.config(function($routeProvider, $locationProvider){
	// $locationProvider.html5Mode(false);
 //    $locationProvider.hashPrefix('!');
		$routeProvider
			.when("/", {
				// templateUrl: "form.html",
				controller: "mainCtrl"
			})
			.when("/choices", {
				templateUrl: "choice-results.html",
				controller: "mainCtrl"
				
			})
	})
})();