'use strict';

/**
 * @ngdoc function
 * @name thereApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thereApp
 */
angular.module('thereApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.isActivePage = function(pagePath) {
      return $location.path() === pagePath;
    };

  });
