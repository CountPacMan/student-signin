signin.controller('SignInCtrl', function SignInCtrl($scope, $state, StudentFactory) {
  $scope.student = StudentFactory;

  $scope.teacherSignIn = function() {
    $state.go('/teacher');
  };

  $scope.studentSignIn = function() {
    $state.go('/student');
  }
});
