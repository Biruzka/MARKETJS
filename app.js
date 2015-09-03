var angular = require('angular');
var marketApp = require('./app/UI/market/index.js');
var infrastructure = require('./app/Infrastructure/index.js');
var domain = require('./app/Domain/index.js');
require('angular-ui-router');

var app = angular.module('app', [
    'ui.router',
    marketApp.name
]);


// app.config(function($stateProvider, $urlRouterProvider){
//   $stateProvider

//     .state('app',{
//       url:'/some',
//       templateUrl:'index.html'
//     })

//       .state('ap',{
//       url:'/app',
//       templateUrl:'i.html'
//     })

//     .state('products', {
//       url:'/products',
//       controller: function ($scope, products) {
//         $scope.products = products;
//       },
//       template: '<products-list products="products"></products-list>',
//       resolve: {
//         products: function () {
//           return $scope.loadProductData();
//         }
//       }
//     })

//     .state('products.form', {
//       url:'/form',
//       template: '<product-form></product-form>',
//     })
// ;
// })














