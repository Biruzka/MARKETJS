
var productsApp = angular.module('products', []);


productsApp.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/UI/directives/products/product-title.html'
    };
  });



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

function ProductForm ($scope) {
    $scope.product = {};
    $scope.addProduct = function (product) {

      if (ValidProduct(product)) {

        alert("hey, you add product!");

          var prod = new ProductEntity({name:product.name,
                                price:product.price,
                                description:product.description,
                                count:product.count,
                                image:product.image,
                                owner:0});
          repositoryProduct.save(prod);

          $scope.product = {};
      }
    };

};

function ValidProduct (product) {

  try{
        if(!product.name || !product.price || !product.count || !product.owner)
          {throw new SyntaxError("Введите данные");
          return false;}
      }
  catch(e){
    if (e.message == "Введите данные")
      {alert("Поля имя, цена и количество - обязательны");
      return false;}
  }
  return true;

};





