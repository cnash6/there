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
    'firebase',
    'ui.bootstrap'
		])
	.config(function ($routeProvider) {
		$routeProvider
		.when('/people', {
			templateUrl: 'views/people.html',
			controller: 'PeopleCtrl',
			controllerAs: 'people'
		})
    .when('/', {
			templateUrl: 'views/appointments.html',
			controller: 'AppointmentsCtrl',
			controllerAs: 'appointments'
		})
		.when('/session', {
		  templateUrl: 'views/session.html',
		  controller: 'SessionCtrl',
		  controllerAs: 'session'
		})
		.when('/createApptmt', {
		  templateUrl: 'views/createapptmt.html',
		  controller: 'CreateapptmtCtrl',
		  controllerAs: 'createApptmt'
		})
		.otherwise({
			redirectTo: '/'
		});
	})

  .run(function($rootScope, $location) {
    $rootScope.$on( "$locationChangeStart", function(event, next, current) {
      if ($rootScope.session) {
        $rootScope.session.off();
        $rootScope.session.disconnect();
        $rootScope.session = null;
      }
    });
  })

  .constant('_', _)
  .constant('moment', moment)
  ;
