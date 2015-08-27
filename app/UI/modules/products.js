
var productsApp = angular.module('products', []);


//directives


productsApp.directive('productTitle', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/UI/directives/products/templates/product-title.html'
  };
});

productsApp.directive('titleMenu', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/UI/directives/products/templates/title-menu.html'
  };
});


//controllers


//контроллер для выкладки товара

function ProductsController ($scope) {
  var scope = $scope;


  $scope.refresh = function () {
    $scope.products = repositoryProduct.showAll();
    alert("here");
  }
  $scope.products = repositoryProduct.showAll();

  $scope.deleteProduct = function (product) {
    var entityProduct = repositoryProduct.getById(product.id);
    entityProduct = new ProductEntity(entityProduct);
    repositoryProduct.delete(entityProduct);
  };
};

productsApp.controller("ProductsList", ['$scope', ProductsController]);





//контроллер для создания товара, формы товара

function ProductForm ($scope, $stateParams, $route) {

  $scope.product = {};
  $scope.priceIsNum = true;
  $scope.countIsNum = true;

  $scope.isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  $scope.ValidationProductForm = function () {

  var mess = '';
  $scope.productForm.$valid=true;

  if ($scope.product.name === undefined) {
    $scope.productForm.$valid=false;
    mess+="name, ";
  }
  if ($scope.product.price === undefined) {
    $scope.productForm.$valid=false;
    mess+="price, ";
  }
  else {
    if (!$scope.isNumeric($scope.product.price)) {
      $scope.priceIsNum = false;
      $scope.productForm.$valid=false;
    }
    else $scope.priceIsNum = true;
  }

  if ($scope.product.count === undefined) {
    $scope.productForm.$valid=false;
    mess+="count ";
  }
  else {
    if (!$scope.isNumeric($scope.product.count)) {
      $scope.countIsNum = false;
      $scope.productForm.$valid=false;
    }
    else $scope.countIsNum = true;
  }

  if (!$scope.productForm.$valid) alert(mess+"обязательные поля для заполнения");

  };


  $scope.submitProductForm = function (product) {

    $scope.ValidationProductForm();

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
    $route.reload();
  };

};

productsApp.controller("ProductForm", ['$scope', ProductForm]);








