app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "templates/home.html",
      controller: "ctrl"
    })
    .state('benchmark', {
      url: "/benchmark",
      templateUrl: "templates/result.html",
      controller: "ctrl"
    });
});