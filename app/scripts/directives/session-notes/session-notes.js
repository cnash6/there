angular.module('thereApp')
.directive('sessionNotes', function() {
  return {
    restrict: 'EA',
    scope: {
      session: '=session'
    },
    templateUrl: 'scripts/directives/session-notes/session-notes.html',
    controller: function($scope, api, moment, auth) {

      $scope.addNote = function(note) {

        api.update('notes', {
          sender: auth.getCurrentUser(),
          text: message,
          createdAt: moment().valueOf(),
          session: $scope.session
        });

      };

    }
  };
});
