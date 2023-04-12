
var app = angular.module('myApp', ['ngRoute'])

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
  $routeProvider
  .when('/home', {
    templateUrl: '../clinets/view/pages/home.html',
  })
  .when('/shop-style-2', {
    templateUrl: '../clinets/view/pages/shop-style-2.html',
  })
  .when('/shop-style-4', {
    templateUrl: '../clinets/view/pages/shop-style-4.html',
  })
  .when('/about', {
    templateUrl: '../clinets/view/pages/about-us.html',
  })
  .when('/docs', {
    templateUrl: '../clinets/view/congCu/docs.html',
  })
  .when('/detailShopSingle', {
    templateUrl: '../clinets/view/pages/shop-single-detail.html',
  })
  .otherwise({
    redirectTo: '/home'
  });
});
