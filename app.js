var app = angular.module('app', ['products', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('products', {
      url:'/products',
      templateUrl: 'app/UI/directives/products/products-list.html',
      controller: 'ProductsList'
    })
    .state('products.form', {
      url:'/form',
      templateUrl: 'app/UI/directives/products/product-form.html',
      controller: 'ProductForm'
    })
  ;
})



// var app = angular.module('app', ['ngRoute', 'products']);


// app.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/products', {
//         templateUrl: 'app/UI/directives/products/products-list.html',
//         controller: 'ProductsList'
//       }).
//       when('/products/add_product', {
//         templateUrl: 'app/UI/directives/products/product-form.html',
//         controller: 'ProductForm'
//       }).
//       otherwise({
//         redirectTo: '/products'
//       });
//   }]);




