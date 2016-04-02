angular.module('thereApp')

.factory("Messages", function($firebaseArray) {
  var messagesRef = new Firebase("https://there4you.firebaseio.com/messages");
  return $firebaseArray(messagesRef);
});
