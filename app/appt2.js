

// re-usable factory for profile object
// pass usernmae to get data
angular.module('sampleApp').factory('Profile',["$firebaseObject",
  function($firebaseObject) {
    return function(username) {
      // create ref to db node where data is stored
      //var randomRoomId = Math.round(Math.random() * 100000000);
      var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com");// + randomId);
      var profileRef = ref.child(username);

      // return it as a synchronised object
      return $firebaseobject(profileRef);
    }
  }
]);



//angular.module('sampleApp').controller("ProfileCtrl",["$scope", "$firebaseObject",
  //function($scope, $firebaseObject){
    //var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com");

    // download profile data to local object
    // all changes done in realtime
    //$scope.profile = $firebaseobject(ref.child('profiles').child('physicsmarie'));
  //}
//]);


angular.module('sampleApp').controller("ProfileCtrl",["$scope", "Profile",
  function($scope, Profile){
    // put profile in scope in DOM
    $scope.profile = Profile("physicsmarie");

    // calling $save() on the synchr download profile data to local object
    $scope.saveProfile = function(){
      $scope.profile.$save().then(function(){
        alert('Profile saved');
      }).catch(function(error){
        alert('Error!');
      });
    };
  }
]);



// create entry
//var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com");
// just writing values back to DB not shown locally.
//ref.child("/profiles").transaction(function(){
//  return {
//       "physicsmarie": {
//      name: "Marie Curie",
//      email: "marie@mail.com"
//  }
//};
//})
