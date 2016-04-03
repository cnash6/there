angular.module('thereApp')

.service('api', function($firebaseArray) {
  var apiBasePath = 'https://there4you.firebaseio.com/';

  return {
    getRef: getRef,
    getArray: getArray,
    update: update,
    remove: remove
  };

  function getRef(path) {
    var ref = new Firebase(apiBasePath + path);
    return ref;
  }

  function getArray(path) {
    var ref = getRef(path);
    return $firebaseArray(ref);
  }

  function update(path, objData, objId) {
    var ref = getRef(path);
    if (objId) {
      ref.child(appId)
      .update(objData);
    } else {
      ref.push()
      .set(objData);
    }
  }

  function remove(path, objId) {
    var ref = getRef(path)
    ref.child(objId).remove();
  }

});
