/////////////////// factory to get all messages in arrary ////////////////////////////
angular.module("sampleApp").factory("accountMessages",["$firebaseArray",
  function($firebaseArray) {
    // db reference to messages
    var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/messages");
    //return $firebaseArray(ref);
    return $firebaseArray(ref.child(from);
  }
]);
