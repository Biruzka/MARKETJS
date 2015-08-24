'use strict';

(function(){

  var appControllers = angular.module('appControllers', [ 'store-products','review-form']);


  appControllers.controller("ProductController", ['$scope', ProductController]);

  function ProductController ($scope) {
     $scope.products = repositoryProduct.getAll();
  };

  // ProductController.prototype.addProduct = function (product) {

  // };

  // appControllers.controller("ProductDetailController", ['$scope', '$routParams', ProductDetailController);

  // function ProductDetailController ($scope, $routeParams) {
  //   $scope.productId = $routeParams.productId;
  // };

})();