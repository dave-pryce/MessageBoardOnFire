
var ref = new Firebase("//https:blazing-inferno-4471.firebaseio.com/foo");
  var obj = new $firebaseObject(ref);
  obj.$loaded().then(function() {
  console.log(obj.$value); // "bar"
  });
  // change the value at path foo/ to "baz"
  obj.$value = "baz";
  obj.$save();
  // delete the value and see what is returned
  obj.$remove().then(function() {
  console.log(obj.$value); // null!
  });
