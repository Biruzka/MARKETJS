
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

//директива для list
//папки с директива+контроллер+шаблон
//директива - компонент, замыкающий функциональность
scope: {products: '=list'}
ctrl     $scope.products

//controllers


//контроллер для выкладки товара

function ProductsController ($scope) {
  var scope = $scope;


  $scope.refresh = function () {
    $scope.products = repositoryProduct.showAll();
    alert("here");
  }
  $scope.products = repositoryProduct.All();

  $scope.deleteProduct = function (product) {
    var entityProduct = repositoryProduct.getById(product.id);
    entityProduct = new ProductEntity(entityProduct);
    repositoryProduct.delete(entityProduct);
  };
};

productsApp.controller("ProductsList", ['$scope', ProductsController]);





//контроллер для создания товара, формы товара

function ProductForm ($scope) {

  var setupValidators = function (form) {

    form.price.$validators.number = function (value) {
      return /^\d+$/.test(value);
    };

    form.price.$validators.required = function (value) {
      return value !== '' && value != null;
    };

    form.name.$validators.required = function (value) {
      return value !== '' && value != null;
    };

    form.name.$validators.length = function (value) {
      return value.length > 3;
    };

  };

  $scope.$watch('productForm', setupValidators);

  $scope.product = {};

  $scope.submit = function (event) {
    event.preventDefault();

    if ($scope.productForm.$valid) {
      $scope.addProduct($scope.product);
    }
    else {
      console.error('Form invalid');
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
  };

};

productsApp.controller("ProductForm", ['$scope', ProductForm]);

