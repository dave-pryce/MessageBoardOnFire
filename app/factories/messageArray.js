/////////////////// factory to get all messages in arrary ////////////////////////////
angular.module("sampleApp").factory("chatMessages",["$firebaseArray",
  function($firebaseArray) {
    // db reference
    //var randomRoomId = Math.round(Math.random() * 100000000);
    var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/messages"); // + randomRoomId);
    return $firebaseArray(ref);
  }
]);
