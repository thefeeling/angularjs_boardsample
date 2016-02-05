'use strict';

/**
 * @ngdoc function
 * @name boardSampleApp.controller:UiCtrl
 * @description
 * # UiCtrl
 * Controller of the boardSampleApp
 */
angular.module('boardSampleApp')
  .controller('UiCtrl', function ($scope, $window) {
  	$scope.moveTabs = function(targer){
  		if(target === "board"){
			$window.location.href = "#/";
  		}else{
			$window.location.href = "#/";
  		}
  	}
  });
