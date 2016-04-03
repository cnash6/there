'use strict';

/**
 * @ngdoc function
 * @name thereApp.controller:AppointmentsCtrl
 * @description
 * # AppointmentsCtrl
 * Controller of the thereApp
 */
angular.module('thereApp')
  .controller('AppointmentsCtrl', function ($scope, Appointments) {
  		$scope.appointments = Appointments;

  		$scope.appointments.on("value", function(snapshot) {
  		  console.log(snapshot.val());
  		}, function (errorObject) {
  		  console.log("The read failed: " + errorObject.code);
  		});
  });
