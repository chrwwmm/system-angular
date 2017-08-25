angular.module('YhyApp').controller('cartController', function($rootScope, $scope, $http, $timeout,$state) {
	$scope.$on('$viewContentLoaded', function() {
		  $scope.productList = [
			  {
				title:"1.控客 KK-Mini Pro 智能微插 红外遥控",
				quantity: 1,
				price:"99.00"
			  }, 
			  {
				title:"2.控客 KK-Mini Pro 智能微插 红外遥控",
				quantity: 1,
				price:"99.00"
			  }, 
			  {
				title:"3.控客 KK-Mini Pro 智能微插 红外遥控",
				quantity: 1,
				price:"99.00"
			  },	  
		  ];
		  $scope.modal = {
			total:0,
			title:'购物车'
		}
		  
	});
	$scope.back = function() {
		history.back();
	};
	
	//减少数量
	$scope.sub = function(index){
		if( $scope.productList[index].quantity > 1){
			$scope.productList[index].quantity--;
		}
	};
	//添加数量函数
	$scope.add = function(index){
		$scope.productList[index].quantity++;
	};
	//删除当前商品
	$scope.remove = function(index){
		if(confirm("确定要清空数据吗")){
			$scope.productList.splice(index,1)
		}
	};
	//所有商品总价
	
	$scope.totalQuantity = function(){
		$scope.allprice = 0
		for(var i = 0 ; i <$scope.productList.length;i++ ){
			$scope.allprice += $scope.productList[i].quantity * $scope.productList[i].price;
		}
		return $scope.allprice;		
	};

});