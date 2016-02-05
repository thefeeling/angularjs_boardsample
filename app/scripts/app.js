'use strict';

/**
 * @ngdoc overview
 * @name boardSampleApp
 * @description
 * # boardSampleApp
 *
 * Main module of the application.
 */
 angular
 .module('boardSampleApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap'
  ])
 .config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'views/boardList.html',
    controller : 'ListCtrl',
  })
  .when('/write', {
    templateUrl : 'views/boardWrite.html',
    controller : 'WriteCtrl',
  })
  .when('/update/:boardNo', {
    templateUrl : 'views/boardUpdate.html',
    controller : 'UpdateCtrl',
  })
  .when('/detail/:boardNo', {
    templateUrl : 'views/boardDetail.html',
    controller : 'DetailCtrl',
  })
  .otherwise({
    redirectTo : '/'
  });

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
    */
    console.log("$http default configuration");
    console.table($httpProvider.defaults.headers);
});
