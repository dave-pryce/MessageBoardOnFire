angular.module("sampleApp").controller("userCtrl", ["$scope", "Auth", "Account",
  function($scope, Auth, Account){
    $scope.auth = Auth;


    // toggle sign in
    $scope.toggleSignIn = function(){
      $scope.showSignIn = !$scope.showSignIn;
      $scope.showSignUp = false;
      //console.log(showSignIn);
    }

    // toggle sign up
    $scope.toggleSignUp = function(){
      $scope.showSignUp = !$scope.showSignUp;
      $scope.showSignIn = false;
      //console.log(showSignIn);
    }


    //-------------------------- create new user --------------------------//
    $scope.createUser = function(){

      // null out user feedback errors
      $scope.signInError = null;
      $scope.signUpError = null;

      Auth.$createUser({
      email: $scope.email,
      password: $scope.password}).then(function(authData) {


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
      }).catch(function(error) {
        $scope.signUpError = "Sign In failed: " + error;
      });
    }

      // Sign In
      $scope.signIn = function(){

        // null out errors
        $scope.signInError = null;
        $scope.signUpError = null;

      Auth.$authWithPassword({
        email: $scope.emailIn,
        password: $scope.passwordIn
      }).then(function(authData) {
        $scope.emailIn = null;
        $scope.passwordIn = null;
        // signin to expired on browser shut down
        remember : "sessionOnly";
      }).catch(function(error) {
        $scope.signInError = "Sign In failed: " + error;
      });
    }

    //--------------------------- signOut ----------------------------//
    $scope.signOut = function(){
      Auth.$unauth();
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
