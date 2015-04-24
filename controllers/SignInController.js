signin.controller('SignInCtrl', function SignInCtrl($scope, $state, StudentFactory) {
  $scope.student = StudentFactory;

  $scope.teacherSignIn = function() {
    console.log("hi");
    $state.go('/teacher');
  };

  $scope.studentSignIn = function() {
    $state.go('/student');
  };
});
