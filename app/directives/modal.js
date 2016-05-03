angular.module("sampleApp").controller('ModalCtrl', function ($scope, $uibModal, $log) {

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

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {


  $scope.signIn() = function () {
    $uibModalInstance.close();
  };

//  $scope.cancel = function () {
//    $uibModalInstance.dismiss('cancel');
//  };
});
