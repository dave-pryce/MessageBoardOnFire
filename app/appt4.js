
// factory to get all messages in arrary
angular.module("sampleApp").factory("chatMessages",["$firebaseArray",
  function($firebaseArray) {
    // db reference
    //var randomRoomId = Math.round(Math.random() * 100000000);
    var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/messages"); // + randomRoomId);

    return $firebaseArray(ref);
  }
]);



// controller to add new messages
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
    }
      $scope.message = "";
    }
  ]);


/// Factory to find individual message
angular.module('sampleApp').factory('Message',["$firebaseObject",
  function($firebaseObject) {
    return function(message) {
      // create ref to db node where data is stored
      //var randomId = Math.round(Math.random() * 100000000);
      var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/messages"); //+ randomId);
      var messageRef = ref.child(message);

      // return it as a synchronised object
      return $firebaseObject(messageRef);
    }
  }
]);



angular.module('sampleApp').controller("MsgEditCtrl",["$scope", "Message",
  function($scope, Message){
    // put profile in scope in DOM
    $scope.editmessage = Message("-K5bOTuWZfsSl31pokBN").$bindTo($scope, "Message");
  }
]);
