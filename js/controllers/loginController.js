angular.module('YhyApp').controller('loginController', function($rootScope, $scope, $http, $timeout) {
	$scope.$on('$viewContentLoaded', function() {
		$scope.modal = {
			title:'登录'
		};
		$scope.back = function() {
			history.back();
		};
	});
});