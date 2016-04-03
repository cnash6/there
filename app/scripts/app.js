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
      // if ($rootScope.loggedInUser == null) {
      //   // no logged user, redirect to /login
      //   if ( next.templateUrl === "partials/login.html") {
      //   } else {
      //     $location.path("/login");
      //   }
      // }
    });
  })

  .constant('_', _)
  .constant('moment', moment)
  ;
