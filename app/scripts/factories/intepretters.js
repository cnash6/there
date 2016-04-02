angular.module('thereApp')

.factory("Interpretters", function($firebaseArray) {
  var interprettersRef = new Firebase("https://there4you.firebaseio.com/interpretters");
  return $firebaseArray(interprettersRef);
});
