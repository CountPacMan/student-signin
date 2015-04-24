signin.factory('StudentFactory', function() {
  var factory = {};
  var students = [];

  factory.create = function(studentName) {
    factory.name = studentName;
    factory.signedIn = false;
  };

  factory.updateSignIn = function(index) {
    factory.signedIn = !factory.signedIn;
  };

  return factory;
});
