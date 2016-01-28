////////////////////// controller to add new messages and edit existing /////////////////////
angular.module("sampleApp").controller("MsgCtrl", ["$scope", "chatMessages", "Message", "Auth",
  function($scope, chatMessages, Message, Auth) {

    $scope.messages = chatMessages;
    $scope.auth = Auth;

    $scope.auth.$onAuth(function(authData){
    $scope.authData = authData;
    if (authData)
    {
    $scope.user = authData.uid;
    }
    else {
      $scope.user = "Guest " + Math.round(Math.random()* 100);
    }
    //console.log(authData.uid);


    // show edit form
    $scope.showEdit = function(message){
      //console.log("edit");
      message.edit = true;
    };

    // edit message
    $scope.editMessage = function(message){
      $scope.saveMessage = function(){
        console.log(message);
        console.log(message.from);
        console.log($scope.user);
        if (message.user === authData.uid)
        {
          $scope.message.$save();
          message.edit = false;
      } else $scope.error = 'Not Authorised'
    };
  };


  // Add message
  $scope.addMessage = function() {

    $scope.messages.$add({
      from : $scope.user,
      content: $scope.message,
      timestamp: Firebase.ServerValue.TIMESTAMP
    });
    $scope.message = "";
  };

  });






    }
  ]);
