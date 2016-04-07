angular.module('thereApp')
.directive('sessionMessages', function() {
  return {
    restrict: 'EA',
    scope: {
      session: '=session'
    },
    templateUrl: 'views/session-messages.html',
    controller: function($scope, api, moment, auth, $firebaseArray) {

      $scope.messages = api.getArray('messages');

      for (var i = 0; i < $scope.messages.length; i++) {
        console.log("test");
        console.log($scope.messages[i]);
      }


      $scope.addMessage = function(message) {
        var cu = auth.getCurrentUser();

        api.update('messages', {
          sender: cu ? cu.name : '',
          text: message,
          createdAt: moment().valueOf(),
          session: auth.getSessionId()
        });

      };


    function translate(string) {
      var sourceText=encodeURI(string);
       $http({
          method : "GET",
          url : 'https://www.googleapis.com/language/translate/v2/detect?key=AIzaSyAn79R6d7Ml76gD8oEabZNyMMAoDQRxCs0&q='+sourceText
      }).then(function mySucces(response) {
        if(response.data.data.detections.length > 0) {
          var req = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyAn79R6d7Ml76gD8oEabZNyMMAoDQRxCs0&source='+response.data.data.detections[0][0].language+'&target=en&callback=translateText&q=' + sourceText;
           $http({
              method : "GET",
              url : req
          }).then(function mySucces(response) {
            console.log(response);
                return(response);
          }, function myError(response) {
            return("error")
          });
        }
      }, function myError(response) {
        return("error");
      });
    }

    }
  };
});
