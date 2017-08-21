/* Yhy App */
var YhyApp = angular.module("YhyApp", [
	"ui.router",
	"oc.lazyLoad"
]);

/* Setup App Main Controller */
YhyApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.$on('$viewContentLoaded', function() {
		
	});
}]);

/* Setup Layout Part - Header */
YhyApp.controller('HeaderController', ['$scope', function($scope) {
	$scope.$on('$includeContentLoaded', function() {
		
	});
}]);

/* Setup Layout Part - Footer */
YhyApp.controller('FooterController', ['$state','$scope', function($state, $scope) {
	$scope.$on('$includeContentLoaded', function() {
		
	});
}]);

/* Setup Rounting For All Pages */
YhyApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	// Redirect any unmatched url
	$urlRouterProvider.otherwise("/dashboard");

	$stateProvider
		.state('dashboard', {
			url: "/dashboard",
			templateUrl: "pages/dashboard.html",
			data: {
				pageTitle: '亿慧云'
			},
			controller: "dashboardController",
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						name: 'YhyApp',
						insertBefore: '#ng_load_plugins_before',
						files: [
							'js/controllers/dashboardController.js',
							'assets/global/js/swiper-3.4.2.min.js',
						]
					});
				}]
			}
		})
		.state('shop', {
			url: "/shop",
			templateUrl: "pages/shop.html",
			data: {
				pageTitle: '商城'
			},
			controller: "shopController",
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						name: 'YhyApp',
						insertBefore: '#ng_load_plugins_before',
						files: [
							'js/controllers/shopController.js',
							'assets/global/js/swiper-3.4.2.min.js',
						]
					});
				}]
			}
		})
		.state('my', {
			url: "/my",
			templateUrl: "pages/my.html",
			data: {
				pageTitle: '我的'
			},
			controller: "myController",
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						name: 'YhyApp',
						insertBefore: '#ng_load_plugins_before',
						files: [
							'js/controllers/myController.js',
						]
					});
				}]
			}
		})
		
}]);