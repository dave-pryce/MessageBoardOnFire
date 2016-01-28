angular.module("sampleApp").controller("userCtrl", ["$scope", "Auth",
  function($scope, Auth){
    $scope.auth = Auth;

    // create new user
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
    }


      // Sign In
      $scope.signIn = function(){

      Auth.$authWithPassword({
        email: $scope.emailIn,
        password: $scope.passwordIn
      }).then(function(authData) {
        $scope.alert = "Logged in as: " + authData.uid;
        $scope.error = null;
        $scope.emailIn = null;
        $scope.passwordIn = null;
        // signin to expired on browser shut down
        remember : "sessionOnly"
      }).catch(function(error) {
        $scope.error = "Authentication failed: " + error;
      });
    }

    // signOut
    $scope.signOut = function(){
      Auth.$unauth();
      $scope.alert = null;
    };


    // check authorisation status
    $scope.auth.$onAuth(function(authData){
    $scope.authData = authData;
  });



    }


])
