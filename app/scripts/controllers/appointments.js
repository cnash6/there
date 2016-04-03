'use strict';

/**
 * @ngdoc function
 * @name thereApp.controller:AppointmentsCtrl
 * @description
 * # AppointmentsCtrl
 * Controller of the thereApp
 */
angular.module('thereApp')

  .controller('AppointmentsCtrl', function ($scope, $firebaseArray, Appointments, moment, api) {


    $scope.appointments = api.getRef('appointments');
	  $scope.apps = $firebaseArray($scope.appointments);
	  $scope.apps.$loaded().then(function() {
		      addProfilePics();
	  })

	$scope.appointments.on("value", function(snap) {
		addProfilePics()
  		//console.log(snap.val());
	});

    $scope.addAppointment = function(appId, appData) {
      	$scope.appointments.child(appId).update(appData);
    };

    $scope.addApp = function() {
		api.update('appointments', {
		  'client': 'Joe'
		});
    }

    $scope.addUser = function() {
    	new Firebase("https://there4you.firebaseio.com/").child('users').push().set(
    		{
    			userId: "cnash",
    			name: "Christian Nash",
    			role: "client",
    			imageUrl: "https://s3.amazonaws.com/there4u/headshot.jpg"
    		}
    	);
    }

    function addProfilePics() {
    	for (var i = 0; i < $scope.apps.length; i++) {

    		console.log($scope.apps[i]);
    	}
    }

  });
