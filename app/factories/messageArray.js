/////////////////// factory to get all messages in arrary ////////////////////////////
angular.module("sampleApp").factory("Messages",["$firebaseArray",
  function($firebaseArray) {
    // db reference to messages
    var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/messages");
    return $firebaseArray(ref);
  }
]);
