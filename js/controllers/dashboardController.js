angular.module('YhyApp').controller('dashboardController', function($rootScope, $scope, $http, $timeout) {
	$scope.$on('$viewContentLoaded', function() {
		  var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    
		  })  
	});
});