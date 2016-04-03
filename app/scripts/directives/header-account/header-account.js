angular.module('thereApp')
.directive('headerAccount', function() {
  return {
    restrict: 'EA',
    scope: {
    },
    templateUrl: 'scripts/directives/header-account/header-account.html',
    controller: function($scope, api, moment, auth) {

      $scope.$watch(function() {
          return auth.getCurrentUser();
      }, function() {
        $scope.currentUser = auth.getCurrentUser();
      });

      $scope.logout = function() {
        auth.logout();
      };

    }
  };
});
