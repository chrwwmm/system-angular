angular.module('YhyApp').controller('registerController', function($rootScope, $scope, $http, $timeout) {
	$scope.$on('$viewContentLoaded', function() {
		$scope.modal = {
			title:'注册'
		};
		$scope.back = function() {
			history.back();
		};
	});
});