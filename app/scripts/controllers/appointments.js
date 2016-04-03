'use strict';

/**
 * @ngdoc function
 * @name thereApp.controller:AppointmentsCtrl
 * @description
 * # AppointmentsCtrl
 * Controller of the thereApp
 */
angular.module('thereApp')

  .controller('AppointmentsCtrl', function ($scope, $location, moment, api, auth) {

    $scope.apps = api.getArray('appointments');


    $scope.fullnames = [];

  	$scope.apps.$ref().on("value", function(snap) {
  		addProfilePics()
    		//console.log(snap.val());
  	});

    $scope.addAppointment = function(appId, appData) {
      	$scope.appointments.child(appId).update(appData);
    };

    $scope.addApp = function() {
	    api.update('appointments', {
  			therapist: "cnash",
  			interpreter: "adaniel",
			  client: "wriley",
    		description: "This is a remote session",
        sessionid: "2_MX40NTU0ODgzMn5-MTQ1OTcwMjY2NzA1NX5FT2h1ZnZQendJMFNSZkdQWDcwQThZNmN-UH4",
        startdate: moment().add(2, 'days').valueOf(),
      });
    }
    //$scope.addApp();

    // $scope.addUser = function() {
    // 	api.update('users', {
  		// 	name: "Anthony Daniel",
  		// 	role: "client",
  		// 	imageurl: "https://s3.amazonaws.com/there4u/anthonyd_LThumb.jpg"
  		// }, 'adaniel');
    // }

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
        console.log($scope.fullnames);
        return $scope.fullnames[username];
    };

    $scope.myUpcomingAppointments = function(value, index, array) {
      var currentUser = auth.getCurrentUser();
      return currentUser && (value.therapist === currentUser.username || value.interpreter === currentUser.username || value.client === currentUser.username || value.observer === currentUser.username) ;
    };

  });
