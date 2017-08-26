angular.module('YhyApp').controller('orderController', function($rootScope, $scope, $http, $timeout) {
	$scope.$on('$viewContentLoaded', function() {
		$scope.modal = {
			title:'订单中心'
		};
		$scope.back = function() {
			history.back();
		};
		
		$scope.data = {
            current: "1" 
        };
        $scope.actions = {
            setCurrent: function (param) {
                $scope.data.current = param;
                "ng-class":"od-current";
            }
        }
	});
});