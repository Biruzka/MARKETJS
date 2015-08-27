
var app = angular.module('app', ['products', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('products', {
      url:'/products',
      controller: function ($scope, products) {
        $scope.products = products;
      },
      template: '<products-list products="products" />',
      resolve: {

        products: function (Product) {
          return Product.load();

        }
      }
    })
    .state('products.form', {
      url:'/form',
      templateUrl: 'app/UI/directives/products/templates/product-form.html',
      controller: 'ProductForm'
    })
  ;
})




