angular.module('thereApp')

.service('api', function($firebaseArray, $q) {
  var apiBasePath = 'https://there4you.firebaseio.com/';

  return {
    getRef: getRef,
    getArray: getArray,
    getValue: getValue,
    update: update,
    remove: remove,
    exists: exists,
  };

  function getRef(path) {
    var ref = new Firebase(apiBasePath + path);
    return ref;
  }

  function getArray(path) {
    var ref = getRef(path);
    return $firebaseArray(ref);
  }

  function getValue(path, objId) {
    var d = $q.defer();
    var ref = getRef(path);
    if (objId) {
      ref.child(objId).once("value", function(snapshot) {
        var data = snapshot.val();
        d.resolve(data);
      })
    } else {
      ref.once("value", function(snapshot) {
        var data = snapshot.val();
        d.resolve(data)
      });
    }
    return d.promise;
  }

  function exists(path, objId) {
    var d = $q.defer();
    var ref = getRef(path);
    if (objId) {
      ref.child(objId).once("value", function(snapshot) {
        d.resolve(snapshot.exists());
      })
    } else {
      ref.once("value", function(snapshot) {
        d.resolve(snapshot.exists());
      });
    }
    return d.promise;
  }

  function update(path, objData, objId) {
    var d = $q.defer();
    var ref = getRef(path);
    if (objId) {
      ref.child(objId)
      .update(objData, function(err) {
        if (err) {
          d.reject(err);
        } else {
          d.resolve();
        }
      });
    } else {
      ref.push()
      .set(objData, function(err) {
        if (err) {
          d.reject(err);
        } else {
          d.resolve();
        }
      });
    }
    return d.promise;
  }

  function remove(path, objId) {
    var ref = getRef(path)
    ref.child(objId).remove();
  }

});
