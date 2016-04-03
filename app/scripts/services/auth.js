angular.module('thereApp')

.service('auth', function(api, $location, $cookies, $rootScope) {
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

    api.exists('users', username).then(function(exists) {
      if (!exists) {
        api.update('users', {
            role: 'therapist',
            username: username,
            name: 'Joe Smith'
        }, username).then(function() {
          api.getValue('users', username).then(function(user) {
              setCurrentUser(user);
              $location.path('/appointments');
          });
        })
      } else {
        api.getValue('users', username).then(function(user) {
            setCurrentUser(user);
            $location.path('/appointments');
        });
      }
    });
  }

  function logout() {
    currentUser = null;
    $cookies.remove('currentUser');
    $rootScope.$broadcast('changeCurrentUser', null);
  }

  function getCurrentUser() {
    return $cookies.getObject('currentUser');
  }

  function setCurrentUser(user) {
    $cookies.putObject('currentUser', user);
    $rootScope.$broadcast('changeCurrentUser', user);
  }

  function getSessionId() {
    return sessionId;
  }

  function setSessionId(nSessionId) {
    sessionId = nSessionId;
  }

});
