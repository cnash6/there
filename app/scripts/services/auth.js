angular.module('thereApp')

.service('auth', function(api) {
  var currentUser = null;
  var currentSession = null;

  return {
    login: login,
    logout: logout,
    getCurrentUser: getCurrentUser,
    getCurrentSession: getCurrentSession,
  };

  function login(username, password) {
    currentUser = api.getRef('users').child(username);
  }

  function logout() {
    currentUser = null;
  }

  function getCurrentUser() {
    return currentUser;
  }

  function getCurrentSession() {
    return currentSession;
  }

});
