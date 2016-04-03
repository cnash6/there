'use strict';

/**
 * @ngdoc function
 * @name thereApp.controller:AppointmentsCtrl
 * @description
 * # AppointmentsCtrl
 * Controller of the thereApp
 */
angular.module('thereApp')

  .controller('ReviewCtrl', function ($scope, $location, moment, api, auth) {

    $scope.fullnames = [];

    $scope.apps = api.getArray('appointments');

  	$scope.apps.$ref().on("value", function(snap) {
  		addProfilePics()
    		//console.log(snap.val());
  	});

    $scope.addAppointment = function(appId, appData) {
      	$scope.appointments.child(appId).update(appData);
    };

    $scope.addApp = function() {
	    api.update('appointments', {
  			therapist: "wriley",
  			interpreter: "cnash",
				client: "adaniels",
    		description: "This is a remote session yeah",
        startdate: moment().add(7, 'days').valueOf(),
      });
    }

    $scope.addUser = function() {
    	api.update('users', {
  			name: "Anthony Daniel",
  			role: "client",
  			imageurl: "https://s3.amazonaws.com/there4u/anthonyd_LThumb.jpg"
  		}, 'adaniel');
    }

    $scope.goToAppointment = function(app) {
    	$location.path('/session').search({sessionid: app.sessionid});
    }

    function addProfilePics() {
  		var ref = api.getRef('users');
  		ref.once("value", function(snap) {
  		  	var usersobj = snap.val();
  		  	var users = $.map(usersobj, function(value, index) {
  		  	    return [value];
  		  	});
  		  	console.log(users);
  		  	for (var i = 0; i < $scope.apps.length; i++) {
  		  		for(var j = 0; j < users.length; j++) {
  		  			if ($scope.apps[i].client == users[j].username) {
  		  				$scope.apps[i].imageurl = users[j].imageurl;
                $scope.fullnames[users[j].username] = users[j].name;
  		  			}
  		  		}
  		  	}
  		  	$scope.$apply();
  		})
    }

    $scope.getFullName = function(username) {
        return $scope.fullnames[username];
    };

    $scope.myPastAppointments = function(value, index, array) {
      var currentUser = auth.getCurrentUser();
      return currentUser && (value.therapist === currentUser.username || value.interpretter === currentUser.username || value.client === currentUser.username || value.observer === currentUser.username) ;
    };


  });
