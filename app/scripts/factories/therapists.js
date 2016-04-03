angular.module('thereApp')

.factory("Therapists", function($firebaseArray, Firebase) {
  var therapists = new Firebase("https://there4you.firebaseio.com/therapists");
  return therapists;
});
