// define app
var app = angular.module("sampleApp",["firebase"]);



//factory return array of chat messages
app.factory("chatMessages", ["$firebaseArray",
  function($firebaseArray){
    // create reference to db location where data is stored
    var randomRoomID = Math.round(Math.random() * 100000000);
    var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/chat" + randomRoomID);

    //uses Angularfire to create synchronised array.
    return $firebaseArray(ref);
  }
]);


//controller
app.controller("ChatCtrl", ["$scope", "chatMessages",
  // pass new chat messages factory into controller
  function($scope, chatMessages) {
    $scope.user = "Guest" + Math.round(Math.random() * 100);

    // add chatMessages array to scope to be used in ng-repeat
    $scope.messages = chatMessages;

    // method to create new messages called by ng-submit
    $scope.addMessage = function(){
      // $add like Array.push() - except it saves changes to db also.
      $scope.messages.$add({
        from : $scope.user,
        content: $scope.message
      });

      // reset message input
      $scope.message = "";
    };

    // if the messages are empty add something.
    $scope.messages.$loaded(function(){
      if ($scope.messages.length === 0) {
        $scope.messages.$add({
          from: "Firebase Docs",
          content: "Hello world!"
        });
      }
    });
  }
]);
