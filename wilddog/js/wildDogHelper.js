var wildDogHelper = function (url, errorCallback) {
  var self = {};
  var ref = new Wilddog(url);

  self.get = function (entity, callback, customerErrorCallback) {
    ref.child(entity).on("value", function (snapshot, error) {
      if (error == null) {
        callback(snapshot.val());
      } else {
        if (customerErrorCallback) {
          customerErrorCallback(error);
        } else {
          errorCallback(error);
        }
      }
    });
  }
  self.create = function (entity, data, callback, customerErrorCallback) {
    var result = ref.child(entity).push(data, customerErrorCallback);
    callback(result);
  }
  self.delete = function (entity, customerErrorCallback) {
    ref.child(entity).remove(customerErrorCallback);
  }
  self.update = function (entity, data, customerErrorCallback) {
    ref.child(entity).update(data, customerErrorCallback);
  }
  return self;
}("https://skiller-ng-data-1.wilddogio.com/", function (error) {
  console.error(error);
});

//https://skiller-ng-data-1.wilddogio.com/

