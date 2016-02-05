'use strict';

/**
 * @ngdoc function
 * @name boardSampleApp.controller:UpdateCtrl
 * @description
 * # UpdateCtrl
 * Controller of the boardSampleApp
 */
angular.module('boardSampleApp')
  .controller('UpdateCtrl', function ($scope, $routeParams, $http, $window) {
	var boardDt = $scope.boardDt;
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
	
	
	$scope.updateBoardDt = function(boardNo){
		$http.post(	"http://localhost:8080/rest/board/update", this.boardDt)
		.then(
			function successCallBack(response){
				$window.location.href = "#/"
			},
			function errorCallBack(response){
				$window.alert("Failure");	
			}
		);
	}
  });
