angular.module("sampleApp").factory("chatMessages",["$firebaseArray",
  function($firebaseArray) {
    // db reference
    var randomRoomId = Math.round(Math.random() * 100000000);
    var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/messages"); // + randomRoomId);

    return $firebaseArray(ref);
  }
]);



//angular.module("sampleApp").controller("HistCtrl", ["$scope", "$firebaseArray",
//function($scope, $firebaseArray) {
//  var messagesRef = new Firebase("https://blazing-inferno-4471.firebaseio.com/messages");
  // download data from Firebase
//  $scope.filteredMessages = $firebaseArray(messagesRef);
  // create a query for the most recent 25 messages on the server
     //var query = messagesRef.orderByChild("timestamp").limitToLast(3);
     // the $firebaseArray service properly handles database queries as well
     //$scope.filteredMessages = $firebaseArray(query);
//}
//]);






angular.module("sampleApp").controller("MsgCtrl", ["$scope", "chatMessages",
  function($scope, chatMessages) {

    $scope.user = "Guest " + Math.round(Math.random()* 100);
    $scope.messages = chatMessages;

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
