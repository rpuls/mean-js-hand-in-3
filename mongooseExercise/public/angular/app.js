'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  //'ngRoute',
  'myApp.services',
  'myApp.controllers'
])
.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});
// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/'});
// }]).
// config(function ($httpProvider) {
//    $httpProvider.interceptors.push('AuthInterceptor');
// })

;


