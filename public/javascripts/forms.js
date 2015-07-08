(function(){
	angular.module('app').controller('formCtrl', ['$scope', function($scope, $routeParams){
		$scope.submit = function() {
			alert('here')
		}
	}]);
})();