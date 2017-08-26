angular.module('YhyApp').controller('sortController', function($rootScope, $scope, $http, $timeout,$state) {
	$scope.$on('$viewContentLoaded', function() {
	    $scope.modal = {
			title:'分类'
		}
	    $scope.series = [{
	    	"name":"安防系列",
	    	"product":[
	    		{"title":"智能IP摄像机","img":"assets/images/product images/智能IP摄像机.png"},
	    		{"title":"智能门锁","img":"assets/images/product images/智能门锁.png"}
	    	]},{
	    	"name":"开关系列",
	    	"product":[
	    		{"title":"智能窗帘开关","img":"assets/images/product images/智能窗帘开关.png"},
	    		{"title":"智能情景开关","img":"assets/images/product images/智能情景开关.png"},
	    		{"title":"智能照明开关","img":"assets/images/product images/智能照明开关.png"}
	    	]},{
	    	"name":"生活系列",
	    	"product":[
	    		{"title":"智能负离子","img":"assets/images/product images/智能负离子.png"},
	    		{"title":"智能手表","img":"assets/images/product images/智能手表.png"},
	    		{"title":"智能语音机器人","img":"assets/images/product images/智能语音机器人.png"}
	    	]}
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