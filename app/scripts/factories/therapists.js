angular.module('thereApp')

.factory("Therapists", function($firebaseArray) {
  var therapists = new Firebase("https://there4you.firebaseio.com/therapists");
  return $firebaseArray(therapists);
});
