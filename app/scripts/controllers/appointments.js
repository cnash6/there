'use strict';

/**
 * @ngdoc function
 * @name thereApp.controller:AppointmentsCtrl
 * @description
 * # AppointmentsCtrl
 * Controller of the thereApp
 */
angular.module('thereApp')

  .controller('AppointmentsCtrl', function ($scope, $firebaseArray, Appointments) {

    $scope.appointments = Appointments;
		$scope.apps = $firebaseArray($scope.appointments);

  });
