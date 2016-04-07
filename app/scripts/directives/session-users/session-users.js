angular.module('thereApp')
.directive('sessionUsers', function() {
  return {
    restrict: 'EA',
    scope: {
      session: '=session'
    },
    templateUrl: 'views/session-users.html',
    controller: function($scope, api, moment, auth) {


    }
  };
});
