angular.module('YhyApp').controller('productController', function($rootScope, $scope, $http, $timeout) {
	$scope.$on('$viewContentLoaded', function() {
		$scope.modal = {
			title:'商品详情'
		}
		var mySwiper = new Swiper ('.swiper-container', {
	    	direction: 'horizontal',
	    	loop: true,
	    
	    	// 如果需要分页器
	    	pagination: '.swiper-pagination',
	    
	  	})  
	});
	$scope.back = function() {
		history.back();
	};
});