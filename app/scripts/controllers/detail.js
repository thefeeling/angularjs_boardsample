'use strict';

/**
 * @ngdoc function
 * @name boardSampleApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the boardSampleApp
 */
angular.module('boardSampleApp')
  .controller('DetailCtrl', function ($scope, $routeParams, $http, $window) {
	$scope.boardNo = $routeParams.boardNo;
	$scope.boardDt = {};
	
	$http.get('http://localhost:8080/rest/board/detail/' + $scope.boardNo)
	.then(
		function successCallBack(response){
			$scope.boardDt = response.data;
		},
		function errorCallBack(response){
		}
	);
	
	// 수정 이동
	$scope.boardUpdate = function(boardNo){
		$window.location.href = "#/update/" + boardNo;				
	}
	
	//삭제
	$scope.boardDelete = function(boardNo){
		if($window.confirm("delete?")){
			$http.delete('http://localhost:8080/rest/board/delete/' + $scope.boardNo)
			.then(
				function successCallBack(response){
					if(response.status !== 200){
						$window.alert("실패");
					}
					$window.location.href = "#/"								
					
				},
				function errorCallBack(response){
					console.log(response);
				}					
			);
		}
	}
  });
