///////////////// Factory to find individual Account object ////////////////////////////
angular.module("sampleApp").factory('Account',["$firebaseObject",
  function($firebaseObject) {
    return function(accountid) {
      var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/accounts");
      var accountRef = ref.child(accountid);
      // return it as a synchronised object
      return $firebaseObject(accountRef);
    }
  }
]);
