'use strict';

/**
 * @ngdoc service
 * @name boardSampleApp.RestfulSvc
 * @description
 * # RestfulSvc
 * Factory in the boardSampleApp.
 */
 angular.module('boardSampleApp')
 .factory('RestfulSvc', ['$resource',function ($resource) {
		/* 
		------------------------------------------------------------------------------------------------
		$resource
		------------------------------------------------------------------------------------------------
		: A factory which creates a resource object 
			that lets you interact with RESTful server-side data sources.
		
		The returned resource object has action methods 
		which provide high-level behaviors without the need to interact with the low level $http service.
		*/
		var prefixUrl = 'http://localhost:8080/rest';
		var url       = prefixUrl + '/:domain/:action/:addParam';
		var params    = {
			domain : "@domain",
			action : "@action",
			addParam : "@addParam"
		}

		var actions = {
			one    : {method : 'GET', isArray : false , cancellable: true},
			all    : {method : 'GET', isArray : true  , cancellable: true} ,
			page   : {method : 'GET', isArray : true} ,
			update : {method : 'PUT'}			
		}
		return $resource(url, params, actions);
	}]);