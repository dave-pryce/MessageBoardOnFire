angular.module("sampleApp").config(function($routeProvider){
  $routeProvider

  .when ('/', {
    templateUrl : "index.html"
  })

 .when ('/account', {
    templateUrl : "account.html"
  })


})
