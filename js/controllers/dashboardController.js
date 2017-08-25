angular.module('YhyApp').controller('dashboardController', function($rootScope, $scope, $http, $timeout) {
	$scope.$on('$viewContentLoaded', function() {
		  var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    
		  })  
		  $scope.modal = {
			imgUrl1: 'assets/images/home_fill.png',
			imgUrl2: 'assets/images/shop.png',
			imgUrl3: 'assets/images/my.png',
			curr1: 'curr',
			curr2: 'no-curr',
			curr3: 'no-curr'
		  }
	});
});