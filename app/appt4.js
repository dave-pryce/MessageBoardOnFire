angular.module("sampleApp").factory("chatMessages",["$firebaseArray",
  function($firebaseArray) {
    // db reference
    var randomRoomId = Math.round(Math.random() * 100000000);
    var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/messages" + randomRoomId);

    return $firebaseArray(ref);
  }
]);





angular.module("sampleApp").controller("MsgCtrl", ["$scope", "chatMessages",
  function($scope, chatMessages) {

    $scope.user = "Guest " + Math.round(Math.random()* 100);

    $scope.messages = chatMessages;

    // download data from Firebase
    //$scope.messages = $firebaseArray(messagesRef);
    // quesry for most recent 10 messages
    ///var query = chatMessages.orderByChild("timestamp").limitToLast(10);
    //$scope.filteredMessages = $firebaseArray(query);


    $scope.addMessage = function() {
      $scope.messages.$add({
        from : $scope.user,
        content: $scope.message,
        timestamp: Firebase.ServerValue.TIMESTAMP
      });

      $scope.message = "";
    }


    ///////////////////////////////////////// add message
    //var messages = $firebaseArray(messagesRef);
    // add a new record to the list
    //messages.$add({
    //  user: "D E",
    //  text: "Hello world 2"
  //  });

  }
]);
