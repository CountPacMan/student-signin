signin.controller('SignInCtrl', function SignInCtrl($scope, $state, StudentFactory) {
  $scope.StudentFactory = StudentFactory;
  $scope.students = StudentFactory.students;

  $scope.teacherSignIn = function() {
    $state.go('/teacher');
  };

  $scope.studentSignIn = function() {
    $state.go('/student');
  };

  $scope.setPresent = function(student) {
    $scope.StudentFactory.updateSignIn(student)
  }
});
