angular.module('YhyApp').controller('shopController', function($rootScope, $scope, $http, $timeout) {
	$scope.$on('$viewContentLoaded', function() {
	    var mySwiper = new Swiper ('.swiper-container', {
	    	direction: 'horizontal',
	    	loop: true,
	    
	    	// 如果需要分页器
	    	pagination: '.swiper-pagination',
	    
	  	})  
	  	
	  	$scope.modal = {
			imgUrl1: 'assets/images/home.png',
			imgUrl2: 'assets/images/shop_fill.png',
			imgUrl3: 'assets/images/my.png',
			curr1: 'no-curr',
			curr2: 'curr',
			curr3: 'no-curr'

		}
	});
});