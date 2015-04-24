var singin = angular.module('signin', ['ui.router']);

signin.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('/student', {
    url: "/student",
    templateUrl: "partials/student.html",
    controller: 'SignInCtrl'
  });

  $stateProvider.state('/teacher', {
    url: "/teacher",
    templateUrl: "partials/teacher.html",
    controller: 'SignInCtrl'
  });
});
