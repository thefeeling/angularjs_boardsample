'use strict';

/**
 * @ngdoc function
 * @name boardSampleApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the boardSampleApp
 */
angular.module('boardSampleApp')
  .controller('ListCtrl', function ($scope, $window, $http, $log) {
	$scope.nextPage    = 0;
	$scope.backPage    = 0;
	$scope.boardList   = [];

	// Pagination Add
	$scope.totalItems = 64;
	$scope.currentPage = 1;

	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;

	$scope.setPage = function (pageNo) {
	  $scope.currentPage = pageNo;
	};

	$scope.pageChanged = function() {
		$http.get('http://localhost:8080/rest/board/list?currentPage=' + $scope.currentPage)
		.then(
			function successCallBack(response){
				$scope.boardList = response.data.boardList;
				// 첫 페이지인 경우
				//$scope.currentPage = (response.data.currentPage);
				if(response.data.currentPage === 1){
					$scope.nextPage  = (response.data.currentPage) + 1;
					$scope.backPage  = 0;
				}else{
					$scope.nextPage  = (response.data.currentPage) + 1;
					$scope.backPage  = (response.data.currentPage) - 1;						
				}
			},
			function errorCallBack(response){
				$window.alert("Network Failure");
			}				
		)
	};


	$http.get('http://localhost:8080/rest/board/list')
	.then(
		function successCallBack(response){
			$scope.boardList  = response.data.boardList;
			$scope.totalItems = response.data.boardList[0].totalCount;
			// 첫 페이지인 경우
			if(response.data.currentPage === 1){
				$scope.nextPage  = (response.data.currentPage) + 1;
				$scope.backPage  = 0;
			}else{
				$scope.nextPage  = (response.data.currentPage) + 1;
				$scope.backPage  = (response.data.currentPage) - 1;						
			}
		},
		function errorCallBack(response){
			$window.alert("Network Failure");
		}
	);
	
	$scope.selectBoardDetail = function(boardNo){
		$window.location.href = "#/detail/" + boardNo;
	};
	
	$scope.pageMove = function(pageNo){
		$http.get('http://localhost:8080/rest/board/list?currentPage=' + pageNo)
		.then(
			function successCallBack(response){
				$scope.boardList = response.data.boardList;
				// 첫 페이지인 경우
				//$scope.currentPage = (response.data.currentPage);
				if(response.data.currentPage === 1){
					$scope.nextPage  = (response.data.currentPage) + 1;
					$scope.backPage  = 0;
				}else{
					$scope.nextPage  = (response.data.currentPage) + 1;
					$scope.backPage  = (response.data.currentPage) - 1;						
				}
			},
			function errorCallBack(response){
				$window.alert("Network Failure");
			}				
		)
	};



});
