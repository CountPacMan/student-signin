signin.controller('SignInCtrl', function SignInCtrl($scope, $state, StudentFactory) {
  $scope.StudentFactory = StudentFactory;
  $scope.students = StudentFactory.students;

  $scope.teacherSignIn = function() {
    console.log("hi");
    $state.go('/teacher');
  };

  $scope.studentSignIn = function() {
    $state.go('/student');
  };
});
