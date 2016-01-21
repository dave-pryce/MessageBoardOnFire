angular.module("sampleApp").controller("userCtrl", ["$scope", "Auth",
  function($scope, Auth){
    $scope.createUser = function(){
      $scope.message = null;
      $scope.error = null;

      Auth.$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(userData) {
        $scope.alert = "User Created with uid: " + userData.uid;
      }).catch(function(error) {
        $scope.error = error;
      });

    };
  }
])
