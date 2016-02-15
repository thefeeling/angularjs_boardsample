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
 .config(function ($routeProvider) {
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
});
