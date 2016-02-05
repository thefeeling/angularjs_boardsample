'use strict';

/**
 * @ngdoc function
 * @name boardSampleApp.controller:WriteCtrl
 * @description
 * # WriteCtrl
 * Controller of the boardSampleApp
 */
 angular.module('boardSampleApp')
 .controller('WriteCtrl', function ($scope, $window, $http, boardService) {
 	var boardDt = $scope.boardDt;

 	$scope.boardDt = boardService.getBoardModel();

 	$scope.saveBoard = function(){
 		$http.post("http://localhost:8080/rest/board/insert", $scope.boardDt)
 		.then(
 			function successCallBack(response){
 				$window.location.href = "#/"
 			},
 			function errorCallBack(response){
 				$window.alert("Failure");	
 			}
 			)
 		console.log(boardDt);
 	};
 });
