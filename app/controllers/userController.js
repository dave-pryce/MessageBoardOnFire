angular.module("sampleApp").controller("userCtrl", ["$scope", "Auth",
  function($scope, Auth){
    $scope.createUser = function(){
      $scope.alert = null;
      $scope.error = null;

      Auth.$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(userData) {
        $scope.alert = "User Created with uid: " + userData.uid;
      }).catch(function(error) {
        $scope.error = error;
      });


      $scope.signIn = function(){
      $scope.authObj.$authWithPassword({
        email: $scope.email,
        password: $scope.password
      }).then(function(authData) {
        console.log("Logged in as:", authData.uid);
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    }


    };
  }
])




//$scope.authObj.$authWithPassword({
//  email: $scope.email,
//  password: $scope.password
//}).then(function(authData) {
//  console.log("Logged in as:", authData.uid);
//}).catch(function(error) {
//  console.error("Authentication failed:", error);
//});
