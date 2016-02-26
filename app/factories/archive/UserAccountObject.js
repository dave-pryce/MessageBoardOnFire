///////////////// Factory to find individual Account object ////////////////////////////
angular.module("sampleApp").factory('Account',["$firebaseObject",
  function($firebaseObject) {
    return function(id) {
      var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/accounts");
      var accountRef = ref.child(id);
      //console.log(accountRef);
      // return it as a synchronised object
      return $firebaseObject(accountRef);
    }
  }
]);
