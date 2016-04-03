angular.module('thereApp')

.factory("Interpretters", function($firebaseArray, Firebase) {
  var interprettersRef = new Firebase("https://there4you.firebaseio.com/interpretters");
  return $firebaseArray(interprettersRef);
});
