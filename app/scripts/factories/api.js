angular.module('thereApp')

.service("api", function() {
  var apiBasePath = 'https://there4you.firebaseio.com/';

  return {
    getRef: getRef,
    update: update,
    remove: remove
  };

  function getRef(path) {
    var ref = new Firebase(apiBasePath + path);
    return ref;
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

  function remove(path, objId, objData) {

  }

});
