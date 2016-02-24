angular.module("sampleApp").controller("userCtrl", ["$scope", "Auth", "Accounts", "Account",
  function($scope, Auth, Accounts, Account){
    $scope.auth = Auth;
    $scope.accounts = Accounts;
    $scope.showSignIn = true;
    $scope.showSignUp = false;

    // create new user
    $scope.createUser = function(){

      // null out user feedback info / error
      $scope.info = null;
      $scope.error = null;

        Auth.$createUser({
        email: $scope.email,
        password: $scope.password}).then(function(userData) {
        $scope.info = "User Created with uid: " + userData.uid;


        // create user account
        $scope.accounts.$add({
          id: userData.uid,
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
        $scope.account = Account(authData.uid);
        console.log($scope.account);
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




  // show hide sign in / up
    $scope.showSignUp = function(){
      $scope.showSignUp = true
      $scope.showSignIn = false
    };

    $scope.showSignIn = function(){
      console.log ('triggered')
      $scope.showSignIn = true
      $scope.showSignUp = false
    };

    $scope.show = function(){
      console.log ('triggered')
      $scope.showSignIn = true
      $scope.showSignUp = false
    };

    }


])
