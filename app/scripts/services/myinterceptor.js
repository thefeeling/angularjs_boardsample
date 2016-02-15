'use strict';

/**
 * @ngdoc service
 * @name boardSampleApp.MyInterceptor
 * @description
 * # MyInterceptor
 * Factory in the boardSampleApp.
 */
 angular.module('boardSampleApp')
 .factory('MyInterceptor', ['$q', function ($q) {

 	/*
	------------------------------------------------------------------------------------------------
	Http Interceptor
	------------------------------------------------------------------------------------------------
	Subject  : 공통 Http Interceptor
	Date     : 2016.02.15
 	*/
	var myInterceptor = {
		'request' : function(config){
			//var deferred = $q.defer();
			console.log(config);
			return config;
		},

		'requestError' : function(rejection){
			console.log(rejection);
			return $q.reject(rejection);
		},

		'response' : function(response){
			//console.log(response);
			return response;
		},

		'responseError' : function(rejection){
			if(rejection.status === 400){
				console.log("401 Error Invoke");
			}
			else if(rejection.status === 401){
				console.log("400 Error Invoke");
			}

			//console.log(rejection);
			return $q.reject(rejection);
		}

	}
	return myInterceptor;

 }])
 .config(['$httpProvider',function($httpProvider) {


	/* 
	------------------------------------------------------------------------------------------------
	Setting HTTP Headers
	------------------------------------------------------------------------------------------------
	: The $http service will automatically add certain HTTP headers to all requests. 
	  These defaults can be fully configured by accessing the $httpProvider.defaults.headers configuration object, which currently contains this default configuration:
	
	ex)
	$httpProvider.defaults.headers.common (headers that are common for all requests):
	Accept: application/json, text/plain, * / *

	$httpProvider.defaults.headers.post: (header defaults for POST requests)
	Content-Type: application/json

	$httpProvider.defaults.headers.put (header defaults for PUT requests)
	Content-Type: application/json

	
	: To add or overwrite these defaults, simply add or remove a property from these configuration objects. 
	  To add headers for an HTTP method other than POST or PUT, simply add a new object with the lowercased HTTP method name as the key, 
	  e.g. $httpProvider.defaults.headers.get = { 'My-Header' : 'value' }
	
	: The defaults can also be set at runtime via the $http.defaults object in the same fashion. 
	
	ex)
	module.run(function($http) {
	  $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
	});

	console.log("------------------------------------------------------------------------------------------------------------------------");
	console.log("************************************************$http default configuration*********************************************");
	console.log("------------------------------------------------------------------------------------------------------------------------")
	console.table($httpProvider.defaults.headers);	

	*/


  	/*
	------------------------------------------------------------------------------------------------
	Subject  : Interceptor Sample
	Date     : 2016.02.15
	------------------------------------------------------------------------------------------------
	*/
 	$httpProvider.interceptors.push('MyInterceptor');
 }])
