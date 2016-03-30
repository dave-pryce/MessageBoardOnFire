///// Factory for Account //////////////////
angular.module("sampleApp").factory('Accounts',["$firebaseArray",
  function($firebaseArray) {
    var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/accounts");
    return $firebaseArray(ref);
  }
]);
