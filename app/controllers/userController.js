angular.module("sampleApp").controller("userCtrl", ["$scope", "Auth", "Accounts",
  function($scope, Auth, Accounts){
    $scope.auth = Auth;
    $scope.accounts = Accounts;

    // create new user
    $scope.createUser = function(){

      // null out user feedback info / error
      $scope.info = null;
      $scope.error = null;

        Auth.$createUser({
        email: $scope.email,
        password: $scope.password}).then(function(userData) {
        $scope.info = "User Created with uid: " + userData.uid;


        // create user account in app
        //$scope.accounts.child(userData.uid).$add({
          $scope.accounts.$add({
          name : $scope.name,
          email: $scope.email,
          timestamp: Firebase.ServerValue.TIMESTAMP
       });


        // sign in after sign up
        Auth.$authWithPassword({email: $scope.email,password: $scope.password})
      }).catch(function(error) {$scope.error = error;});
    }


      // Sign In
      $scope.signIn = function(){

      Auth.$authWithPassword({
        email: $scope.emailIn,
        password: $scope.passwordIn
      }).then(function(authData) {
        //console.log(authData);
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
