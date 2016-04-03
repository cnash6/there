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

    $scope.addAppointment = function(appId, appData) {
      $scope.appointments.child(appId).update(appData);
    };

    // $scope.addAppointment('app1', {
    //   client: 'Big Boss'
    // });

  

  });
