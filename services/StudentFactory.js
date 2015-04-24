signin.factory('StudentFactory', function() {
  var factory = {};
  factory.students = [
    { name: "Billy Bob", present: false },
    { name: "Joe Blow", present: false },
    { name: "Billie Jean", present: false },
    { name: "Cindy Mindy", present: false },
    { name: "Abraham Lincoln", present: false },
    { name: "Gloria Swanson", present: false }
  ];

  factory.updateSignIn = function(index) {
    factory.students[index].present = !factory.students[index].present;
  };

  return factory;
});
