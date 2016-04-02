angular.module('thereApp')
.factory("Observers", function($firebaseArray) {
  var observersRef = new Firebase("https://there4you.firebaseio.com/observers");
  return $firebaseArray(observersRef);
});
