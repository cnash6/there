angular.module('thereApp')

.factory("Appointments", function($firebaseArray, Firebase) {
  var appointmentsRef = new Firebase("https://there4you.firebaseio.com/appointments");
  return appointmentsRef;
});
