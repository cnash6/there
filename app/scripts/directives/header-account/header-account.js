angular.module('thereApp')
.directive('headerAccount', function() {
  return {
    restrict: 'EA',
    scope: {
    },
    templateUrl: 'scripts/directives/header-account/header-account.html',
    controller: function($scope, api, moment, auth, $rootScope) {

      //$scope.currentUser = auth.getCurrentUser();

      $rootScope.$on('changeCurrentUser', function() {

        console.log('changeCurrentUser');
        $scope.currentUser = auth.getCurrentUser();

      });

      $scope.loggy = function() {
        auth.logout();
      };

    }
  };
});
