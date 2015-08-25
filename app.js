
var app = angular.module('app', ['ngRoute', 'products']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'app/UI/directives/products/products-list.html',
        controller: 'ProductsList'
      }).
      when('/products/addProduct', {
        templateUrl: 'app/UI/directives/products/product-form.html',
        controller: 'ProductForm'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }]);


