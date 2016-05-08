angular.module("sampleApp").controller('ModalCtrl', ["Auth", function ($scope, $uibModal, $log, Auth) {

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    console.log('running');
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'signInModal.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return ;
        }
      }
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

}]);

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('ui.bootstrap').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {


  $scope.signIn = function () {
    Auth.$authWithPassword({
      email: $scope.emailIn,
      password: $scope.passwordIn
    }).then(function(authData) {
      $scope.error = null;
      $scope.emailIn = null;
      $scope.passwordIn = null;
      // signin to expired on browser shut down
      remember : "sessionOnly";
      $modalInstance.close();
      $uibModalInstance.close();
      /*(#signin).hide;*/
    }).catch(function(error) {
      $scope.signInError = "Authentication failed: " + error;
    });
  };

 $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
 };
});
