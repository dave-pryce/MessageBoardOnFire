///////////////// Factory to find individual message object ////////////////////////////
angular.module("sampleApp").factory('Message',["$firebaseObject",
  function($firebaseObject) {
    return function(messageid) {
      var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/messages");
      var messageRef = ref.child(messageid);
      // return it as a synchronised object
      return $firebaseObject(messageRef);
    }
  }
]);
