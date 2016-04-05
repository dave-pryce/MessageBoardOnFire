angular.module("sampleApp").controller("userCtrl", ["$scope", "Auth", "Account",
  function($scope, Auth, Account){
    $scope.auth = Auth;

    //-------------------------- create new user --------------------------//
    $scope.createUser = function(){

      // null out user feedback info / error
      $scope.info = null;
      $scope.error = null;

      Auth.$createUser({
      email: $scope.email,
      password: $scope.password}).then(function(authData) {
      $scope.info = "User Created with uid: " + authData.uid;


    //----------------- create user account in blazing db vanilla javascript ---------//
      var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/accounts");
      ref.child(authData.uid).set({
      //$scope.accounts.child(userData.uid).set({
      //  Accounts.child(userData.uid).set({
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
        $scope.error = null;
        $scope.emailIn = null;
        $scope.passwordIn = null;
        $scope.close = "modal";
        // signin to expired on browser shut down
        remember : "sessionOnly"
      }).catch(function(error) {
        $scope.error = "Authentication failed: " + error;
      });
    }

    //--------------------------- signOut ----------------------------//
    $scope.signOut = function(){
      Auth.$unauth();
      $scope.alert = null;
      $scope.error = null;
      };


    //----------------------- check authorisation status --------------//
    $scope.auth.$onAuth(function(authData){
    $scope.authData = authData;
    //console.log(authData);
    if (authData) {
    $scope.account = Account(authData.uid);
    }
  });



    }


])
