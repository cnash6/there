angular.module('thereApp')

.factory("Clients", function($firebaseArray) {
  var clientsRef = new Firebase("https://there4you.firebaseio.com/clients");
  return $firebaseArray(clientsRef);
});
