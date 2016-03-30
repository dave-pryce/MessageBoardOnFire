////////////////////// controller to add new messages and edit existing /////////////////////
angular.module("sampleApp").controller("MsgCtrl", ["$scope", "Messages", "Auth", "Account",
  function($scope, Messages, Auth, Account) {

    $scope.messages = Messages;
    $scope.auth = Auth;

    // check to see if signed in
    $scope.auth.$onAuth(function(authData){

    if (authData) {
    $scope.authData = authData;
    $scope.account = Account(authData.uid);
    $scope.user = authData.uid;

    // signed in functions only
                  // show edit form
                  $scope.showEdit = function(message){
                    //console.log("edit");
                    message.edit = true;

                  };

                  // edit message
                    $scope.saveMessage = function(message){
                      //console.log(authData.uid);
                      if ($scope.user === authData.uid)
                      {
                       $scope.messages.$save(message).then(function(){
                         //alert('message saved');
                       }).catch(function(error){
                         $scope.error = alert(error);
                       });
                       message.edit = false;
                    } else $scope.error = 'Not Authorised'
                  };

                // Add message
                $scope.addMessage = function() {

                  $scope.messages.$add({
                    from : $scope.user,
                    name : $scope.account.name,
                    content: $scope.message,
                    timestamp: Firebase.ServerValue.TIMESTAMP
                  }).catch(function(error){
                    $scope.error = alert(error);
                  });
                  $scope.message = "";
                };
              }
  });


    }
  ]);
