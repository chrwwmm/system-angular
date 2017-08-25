angular.module('YhyApp').controller('sortController', function($rootScope, $scope, $http, $timeout,$state) {
	$scope.$on('$viewContentLoaded', function() {
	    $scope.modal = {
			title:'分类'
		}
	    $scope.series = [
	    	{"name":"安防系列","title":"安防产品1"},
	    	{"name":"开关系列","title":"开关产品1"},
	    	{"name":"生活系列","title":"生活产品1"}  	
	    ];
	    $scope.taocan= [
			{"name":"套餐1","title":"套餐1"},
    		{"name":"套餐2","title":"套餐2"},
			{"name":"套餐3","title":"套餐3"}	        
	    ];
	    var selected=$scope.selected;
	    $scope.show=function(index){
	        $scope.selected=index;
	    };
	});
	$scope.back = function() {
		history.back();
	};
	
});