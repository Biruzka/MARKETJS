
var productsApp = angular.module('products', []);


//directives


productsApp.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/UI/directives/products/product-title.html'
    };
  });

productsApp.directive('titleMenu', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/UI/directives/products/title-menu.html'
    };
  });


//controllers

productsApp.controller("ProductsList", ['$scope', ProductsController]);

function ProductsController ($scope) {
   $scope.products = repositoryProduct.showAll();

   $scope.deleteProduct = function (product) {
      var entityProduct = repositoryProduct.getById(product.id);
      entityProduct = new ProductEntity(entityProduct);
      repositoryProduct.delete(entityProduct);
   };
};


productsApp.controller("ProductForm", ['$scope', ProductForm]);

function ProductForm ($scope, $stateParams) {

      $scope.product = {};

      $scope.ValidationProductForm = function () {

      var mess = '';

      if ($scope.productForm.name === undefined) {
        $scope.productForm.$valid=false;
        mess+="name, ";
      }
      if ($scope.productForm.price === undefined) {
        $scope.productForm.$valid=false;
        mess+="price, ";
      }
      if ($scope.productForm.count === undefined) {
        $scope.productForm.$valid=false;
        mess+="count ";
      }

      if (!$scope.productForm.$valid) alert(mess+"обязательные поля для заполнения");

      };


     $scope.submitProductForm = function(product) {

      ValidationProductForm();

        if ($scope.productForm.$valid) {
          $scope.addProduct(product);
        }
      };


    $scope.addProduct = function (product) {
        alert("hey, you add product!");

          var prod = new ProductEntity({name:product.name,
                                price:product.price,
                                description:product.description,
                                count:product.count,
                                image:product.image,
                                owner:0});
          repositoryProduct.save(prod);

          $scope.product = {};

    };

};





