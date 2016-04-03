'use strict';

/**
 * @ngdoc function
 * @name thereApp.controller:CreateapptmtCtrl
 * @description
 * # CreateapptmtCtrl
 * Controller of the thereApp
 */
angular.module('thereApp')
  .controller('CreateAppointmentCtrl', function ($scope, moment, api) {

	$scope.selected = undefined;
	
	$scope.userref = api.getArray("users");
	console.log($scope.userref);
	$scope.userref.$ref().on("value", function(snap) {
		$scope.userObj = snap.val();
		$scope.userArr = $.map($scope.userObj, function(value, index) {
  		  	return [value];
  		});
		$scope.users = [];
		for (var i = 0; i < $scope.userArr.length; i++) {
			$scope.users.push($scope.userArr[i].name);
		}
		console.log($scope.users);
		$scope.$apply();
	});

	$scope.test = ["Christian Nash", "Will Riley", "Anthony Daniel", "Anthony Daniel", "Christian Nash", "Will Riley", "Anthony Daniel", "Christian Nash", "Will Riley", "Anthony Daniel", "Christian Nash", "Will Riley"]

  });
