'use strict';

/**
 * @ngdoc function
 * @name boardSampleApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the boardSampleApp
 */
angular.module('boardSampleApp')
  .controller('ListCtrl', ['$scope', 'boardService', '$window', '$http', '$log', 
  	function ($scope, boardService, $window, $http, $log) {
  	$scope.testList = ["jasmine1","jasmine2","jasmine3"];


	$scope.boardList   = [];

	/*
	 * totalItems  : total list count
	 * currentPage : Page Number
	 * maxSize     : Page Navigation Count
	 */
	$scope.totalItems  = 0;
	$scope.currentPage = 1;
	$scope.maxSize     = 5;

	/*
	------------------------------------------------------------------------------------------------
	boardService.getBoardList // boardservice.js
	------------------------------------------------------------------------------------------------	
	* [Before]
	* $http.get('http://localhost:8080/rest/board/list')
	* .then(
	* 	function successCallBack(response){
	* 		$scope.boardList  = response.data.boardList;
	* 		$scope.totalItems = response.data.boardList[0].totalCount;
	* 		// 첫 페이지인 경우
	* 		if(response.data.currentPage === 1){
	* 			$scope.nextPage  = (response.data.currentPage) + 1;
	* 			$scope.backPage  = 0;
	* 		}else{
	* 			$scope.nextPage  = (response.data.currentPage) + 1;
	* 			$scope.backPage  = (response.data.currentPage) - 1;						
	* 		}
	* 	},
	* 	function errorCallBack(response){
	* 		$window.alert("Network Failure");
	* 	}
	* );
	*/
	boardService.getBoardList({
		successHandler : function (response){
			$scope.boardList  = response.boardList;
			$scope.totalItems = response.boardList[0].totalCount;
		},
		errorHandler : function (response){
			$window.alert("Network Failure");
		}
	});

	$scope.setPage = function (pageNo) {
	  $scope.currentPage = pageNo;
	};

	$scope.pageChanged = function() {
		
		/* [Before]
		* $http.get('http://localhost:8080/rest/board/list?currentPage=' + $scope.currentPage)
		* .then(
		* 	function successCallBack(response){
		* 		$scope.boardList = response.data.boardList;
		* 		// 첫 페이지인 경우
		* 		//$scope.currentPage = (response.data.currentPage);
		* 		if(response.data.currentPage === 1){
		* 			$scope.nextPage  = (response.data.currentPage) + 1;
		* 			$scope.backPage  = 0;
		* 		}else{
		* 			$scope.nextPage  = (response.data.currentPage) + 1;
		* 			$scope.backPage  = (response.data.currentPage) - 1;						
		* 		}
		* 	},
		* 	function errorCallBack(response){
		* 		$window.alert("Network Failure");
		* 	}				
		* )
		*/

		boardService.getBoardList({
			currentPage : $scope.currentPage,
			successHandler : function (response){
				$scope.boardList  = response.boardList;
				$scope.totalItems = response.boardList[0].totalCount;
			},
			errorHandler : function (response){
				$window.alert("Network Failure");
			}
		})
	};
	
	$scope.selectBoardDetail = function(boardNo){
		$window.location.href = "#/detail/" + boardNo;
	};

}]);
