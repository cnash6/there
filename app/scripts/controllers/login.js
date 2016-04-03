'use strict';

/**
 * @ngdoc function
 * @name thereApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the thereApp
 */
angular.module('thereApp')
  .controller('LoginCtrl', function ($scope, auth) {

    $scope.login = auth.login;


  });
