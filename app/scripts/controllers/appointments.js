'use strict';

/**
 * @ngdoc function
 * @name thereApp.controller:AppointmentsCtrl
 * @description
 * # AppointmentsCtrl
 * Controller of the thereApp
 */
angular.module('thereApp')

  .controller('AppointmentsCtrl', function ($scope, $firebaseArray, Appointments, api) {

    $scope.appointments = Appointments;
	  $scope.apps = $firebaseArray($scope.appointments);
	  $scope.apps.$loaded().then(function() {
		      addProfilePics();
	  })

	$scope.appointments.on("value", function(snap) {
		for (var i = 0; i < $scope.apps.length; i++) {
			console.log($scope.apps[i]);
		};
  		//console.log(snap.val());
	});

    $scope.addAppointment = function(appId, appData) {
      	$scope.appointments.child(appId).update(appData);
    };

    $scope.addApp = function() {
    	new Firebase("https://there4you.firebaseio.com/")
      .child('appointments')
      .push()
      .set({client: "Joe"});
    }

    function addProfilePics() {
    	for (var i = 0; i < $scope.apps.length; i++) {
    		console.log($scope.apps[i]);
    	}
    }


    function test() {
      api.update('appointments', {
        client: 'Dan'
      })
    }

  });
