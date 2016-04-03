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
			controllerAs: 'peopleCtrl'
		})
    .when('/', {
			templateUrl: 'views/appointments.html',
			controller: 'AppointmentsCtrl',
			controllerAs: 'appointmentsCtrl'
		})
    .when('/schedule', {
      templateUrl: 'views/appointments.html',
      controller: 'AppointmentsCtrl',
      controllerAs: 'appointmentsCtrl'
    })
    .when('/review', {
      templateUrl: 'views/review.html',
      controller: 'ReviewCtrl',
      controllerAs: 'reviewCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'loginCtrl'
    })
		.when('/session', {
		  templateUrl: 'views/session.html',
		  controller: 'SessionCtrl',
		  controllerAs: 'sessionCtrl'
		})
		.when('/appointment/create', {
		  templateUrl: 'views/create-appointment.html',
		  controller: 'CreateAppointmentCtrl',
		  controllerAs: 'createAppointmentCtrl'
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
