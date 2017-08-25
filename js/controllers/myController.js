angular.module('YhyApp').controller('myController', function($rootScope, $scope, $http, $timeout) {
	$scope.$on('$viewContentLoaded', function() {
		  $scope.modal = {
			imgUrl1: 'assets/images/home.png',
			imgUrl2: 'assets/images/shop.png',
			imgUrl3: 'assets/images/my_fill.png',
			curr1: 'no-curr',
			curr2: 'no-curr',
			curr3: 'curr'

		  }
	});
});