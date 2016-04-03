angular.module('thereApp')
.directive('sessionUsers', function() {
  return {
    restrict: 'EA',
    scope: {
      session: '=session'
    },
    templateUrl: 'scripts/directives/session-users/session-users.html',
    controller: function($scope, api, moment, auth) {


    }
  };
});
