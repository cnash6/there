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

    console.log('cool');

    $scope.login = auth.login;

    console.log('dude');


  });
