
var app = angular.module('app', ['products', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('products', {
      url:'/products',
      templateUrl: 'app/UI/directives/products/templates/products-list.html',
      controller: 'ProductsList'
    })
    .state('products.form', {
      url:'/form',
      templateUrl: 'app/UI/directives/products/templates/product-form.html',
      controller: 'ProductForm'
    })
  ;
})





