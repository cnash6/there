angular.module('thereApp')

.factory("Users", function($firebaseArray, Firebase) {
  var users = new Firebase("https://there4you.firebaseio.com/users");
  return users;
});
