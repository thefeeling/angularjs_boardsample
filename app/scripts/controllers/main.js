'use strict';

/**
 * @ngdoc function
 * @name boardSampleApp.controller:MainCtrl
 * @description $route, $routeParam Description
 * # MainCtrl
 * Controller of the boardSampleApp
 */
 angular.module('boardSampleApp')
 .controller('MainCtrl', function ($scope, $route, $routeParams, $location, $http, $window) {
 	$scope.route       = $route;
 	$scope.routes      = $route.routes;

 	$scope.location    = $location;
 	$scope.routeParams = $routeParams;


 	var config = {
 		method: 'GET', 
 		url: "board.json",
 		headers : {
 			'Content-type' : 'application/json'
 		},
 		responseType : "json"
 	}
  	/*
	------------------------------------------------------------------------------------------------
	Issue    : Status 200, But response.data is null
	Why      : json Question Mark('') Error
	Solution : '' => ""
	------------------------------------------------------------------------------------------------
	*/
	$scope.getJsonBoardAllList = function(){
		$http(config)
		.then(
		function(response) {
			debugger;
			console.log(response.status);
			console.log(response.data);
		},
		function(response) {
			$scope.data = response.data || "Request failed";
			$scope.status = response.status;
		});
	}


	/*
	------------------------------------------------------------------------------------------------	
	$routeChangeSuccess
	------------------------------------------------------------------------------------------------
	[Param]         [Type]	         [Details]
	angularEvent	Object	         Synthetic event object.
	current	        Route	         Current route information.
	previous	    Route,Undefined	 Previous route information, or undefined if current is first route entered.
	------------------------------------------------------------------------------------------------
	*/
	$scope.$on("$routeChangeSuccess", function(angularEvent, current, previous){
		console.log("현재 라우트 정보 : " + current.loadedTemplateUrl);
		if(previous){
			console.log("이전 라우트 정보 : " + previous.loadedTemplateUrl);
		}
	});



	/*
	------------------------------------------------------------------------------------------------	
	$routeChangeStart
	------------------------------------------------------------------------------------------------
	[Param]	        [Type]	    [Details]
	angularEvent	Object		Synthetic event object.
	next	        Route       Future route information.
	current	        Route       Current route information.
	------------------------------------------------------------------------------------------------
	*/
	$scope.$on("$routeChangeStart", function(angularEvent, next, current){
  		console.table(current);
  		if(next){
  			console.table(next);
  		}
  	});

	/*
	------------------------------------------------------------------------------------------------
	$routeChangeError
	------------------------------------------------------------------------------------------------
	[Param]	       [Type]	     [Details]
	angularEvent   Object        Synthetic event object
	current	       Route         Current route information.
	previous	   Route         Previous route information.
	rejection      Route         Rejection of the promise. Usually the error of the failed promise.
	------------------------------------------------------------------------------------------------
	*/
	$scope.$on("$routeChangeError", function(angularEvent, current, previous, rejection){
		console.log("$routeChangeError");
	});

	/*
	------------------------------------------------------------------------------------------------
	$route.reload()
	------------------------------------------------------------------------------------------------
	: Causes $route service to reload the current route even if $location hasn't changed.
	  As a result of that, ngView creates new scope and reinstantiates the controller.
	*/
	$scope.reload = function(){
		$route.reload();
	}



	/*
	------------------------------------------------------------------------------------------------
	$route.updateParams(newParams)
	------------------------------------------------------------------------------------------------
	: Causes $route service to update the current URL, 
	  replacing current route parameters with those specified in newParams
	  */
	$scope.updateParams = function(param){
	}
});
