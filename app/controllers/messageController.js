////////////////////// controller to add new messages and edit existing /////////////////////
angular.module("sampleApp").controller("MsgCtrl", ["$scope", "chatMessages", "Message", "Auth",
  function($scope, chatMessages, Message, Auth) {

    //$scope.user = "Guest " + Math.round(Math.random()* 100);
    $scope.messages = chatMessages;
    $scope.auth = Auth;

    $scope.auth.$onAuth(function(authData){
    $scope.authData = authData;


    // show edit form
    $scope.showEdit = function(message){
      //console.log("edit");
      message.edit = true;
    };

    // edit message
    $scope.editMessage = function(message){
      // add edit property to object
      //console.log (message.$id + " "+ message.edit)
      // calling $save() on the synchronised download profile data to local object
      $scope.saveMessage = function(){
      $scope.message.$save();
      //$scope.message = Message(messageid).$bindTo($scope, "message");
      message.edit = false;
    };
  };

        //$scope.message = Message(messageid).$bindTo($scope, "message");

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
