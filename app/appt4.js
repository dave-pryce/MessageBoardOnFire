
// factory to get all messages in arrary
angular.module("sampleApp").factory("chatMessages",["$firebaseArray",
  function($firebaseArray) {
    // db reference
    //var randomRoomId = Math.round(Math.random() * 100000000);
    var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/messages"); // + randomRoomId);
    return $firebaseArray(ref);
  }
]);


/// Factory to find individual message object
angular.module('sampleApp').factory('Message',["$firebaseObject",
  function($firebaseObject) {
    return function(messageid) {
      // create ref to db node where data is stored
      //var randomId = Math.round(Math.random() * 100000000);
      var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/messages"); //+ randomId);
      var messageRef = ref.child(messageid);

      // return it as a synchronised object
      return $firebaseObject(messageRef);
    }
  }
]);


// controller to add new messages and edit existing
angular.module("sampleApp").controller("MsgCtrl", ["$scope", "chatMessages", "Message",
  function($scope, chatMessages, Message) {

    $scope.user = "Guest " + Math.round(Math.random()* 100);
    $scope.messages = chatMessages;


    // Add message
    $scope.addMessage = function() {
      $scope.messages.$add({
        from : $scope.user,
        content: $scope.message,
        timestamp: Firebase.ServerValue.TIMESTAMP
      });
    }
      $scope.message = "";


      // edit message
      $scope.editMessage = function(message){
        console.log (message.$id + " " + user + " " + message)
        // calling $save() on the synchronised download profile data to local object
        $scope.saveMessage = function(){
        $scope.message.$save().then(function(){
        alert('Message saved');
          }).catch(function(error){
            alert('Error!');
          });
        };




      //$scope.message = Message(messageid).$bindTo($scope, "message");
    }
    }
  ]);






//angular.module('sampleApp').controller("MsgEditCtrl",["$scope", "Message",
  //function($scope, Message){
    // put profile in scope in DOM
    //var messageid = "-K5bOTuWZfsSl31pokBN"
    //$scope.message = Message(messageid).$bindTo($scope, "message");
  //}
//]);
