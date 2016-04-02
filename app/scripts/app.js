'use strict';

/**
 * @ngdoc overview
 * @name thereApp
 * @description
 * # thereApp
 *
 * Main module of the application.
 */
 angular
	.module('thereApp', [
		'ngAnimate',
		'ngAria',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
    'firebase'
		])
	.config(function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl',
			controllerAs: 'main'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl',
			controllerAs: 'about'
		})
		.when('/session', {
		  templateUrl: 'views/session.html',
		  controller: 'SessionCtrl',
		  controllerAs: 'session'
		})
		.otherwise({
			redirectTo: '/'
		});
	})
  .constant('_', _)
  .constant('moment', moment)
  ;
