angular.module("sampleApp").config(function($routeProvider){
  $routeProvider

  .when ('/', {
    redirectTo: '/home'
  })

  .when ('/home', {
    templateUrl : "index.html"
  })

//  .when ('/account', {
//    templateUrl : xxxx
//  })


})
