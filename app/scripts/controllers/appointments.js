'use strict';

/**
 * @ngdoc function
 * @name thereApp.controller:AppointmentsCtrl
 * @description
 * # AppointmentsCtrl
 * Controller of the thereApp
 */
angular.module('thereApp')

  .controller('AppointmentsCtrl', function ($scope, $firebaseArray, moment, api) {


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
  		api.update('appointments',
  			{
      			therapist: "adaniels",
      			interpreter: "wriley",
  				  client: "cnash",
      			description: "This is a remote session",
      			startdate: moment().valueOf(),
            enddate: moment().add(7, 'days').valueOf()
      		}
  		);
    };

    $scope.addUser = function() {
    	api.update('users', {
  			userId: "wriley",
  			name: "Will Riley",
  			role: "client",
  			imageUrl: "https://s3.amazonaws.com/there4u/headshot.jpg"
  		});
    }

    // function addProfilePics() {
    // 	for (var i = 0; i < $scope.apps.length; i++) {
    //
    // 		console.log($scope.apps[i]);
    // 	}
    // }

  });
