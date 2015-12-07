//factory return array of chat messages
angular.module('sampleApp').factory("chatMessages", ["$firebaseArray",
  function($firebaseArray){
    // create reference to db location where data is stored
    var randomRoomID = Math.round(Math.random() * 100000000);
    var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com/chat" + randomRoomID);

    //uses Angularfire to create synchronised array.
    return $firebaseArray(ref);

  }
]);


//controller
angular.module('sampleApp').controller("ChatCtrl", ["$scope", "chatMessages",
  // pass new chat messages factory into controller
  function($scope, chatMessages) {
    $scope.user = "Guest" + Math.round(Math.random() * 100);

    // add chatMessages array to scope to be used in ng-repeat
    $scope.messages = chatMessages;
    //console.log($scope.messages);

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



var ref = new Firebase("https://blazing-inferno-4471.firebaseio.com");
/// just writing values back to DB not shown locally.
ref.child("/counter").transaction(function(currentvalue){
  return (currentvalue || 0) + 1;
})
