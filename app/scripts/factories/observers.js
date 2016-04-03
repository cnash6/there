angular.module('thereApp')
.factory("Observers", function($firebaseArray, Firebase) {
  var observersRef = new Firebase("https://there4you.firebaseio.com/observers");
  return observersRef;
});
