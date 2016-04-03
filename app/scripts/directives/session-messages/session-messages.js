angular.module('thereApp')
.directive('sessionMessages', function() {
  return {
    restrict: 'EA',
    scope: {
      session: '=session'
    },
    templateUrl: 'scripts/directives/session-messages/session-messages.html',
    controller: function($scope, api, moment, auth) {

      $scope.addMessage = function(message) {

        api.update('messages', {
          sender: auth.getCurrentUser(),
          text: message,
          createdAt: moment().valueOf(),
          session: $scope.session
        });

      };

    }
  };
});
