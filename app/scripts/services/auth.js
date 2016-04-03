angular.module('thereApp')

.service('auth', function(api, $location) {
  var currentUser = null;
  var currentSession = null;
  var sessionId = null;

  return {
    login: login,
    logout: logout,
    getCurrentUser: getCurrentUser,
    getSessionId: getSessionId,
    setSessionId: setSessionId
  };

  function login(username, password) {
    console.log(username);

    api.exists('users', username).then(function(exists) {
      if (!exists) {
        api.update('users', {
            role: 'therapist',
            username: username,
            name: 'Joe'
        }, username).then(function() {
          api.getValue('users', username).then(function(user) {
              currentUser = user;
              $location.path('/appointments');
          });
        })
      } else {
        api.getValue('users', username).then(function(user) {
            currentUser = user;
            $location.path('/appointments');
        });
      }
    });
  }

  function logout() {
    currentUser = null;
  }

  function getCurrentUser() {
    return currentUser;
  }

  function getSessionId() {
    return sessionId;
  }

  function setSessionId(nSessionId) {
    sessionId = nSessionId;
  }

});
