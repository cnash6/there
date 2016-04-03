angular.module('thereApp')

.factory("Clients", function($firebaseArray, Firebase) {
  var clientsRef = new Firebase("https://there4you.firebaseio.com/clients");
  return clientsRef;
});
