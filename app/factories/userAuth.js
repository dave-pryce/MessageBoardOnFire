///// Factory for User Authentication //////////////////
angular.module("sampleApp").factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/messages");
    return $firebaseAuth(ref);
  }
]);
