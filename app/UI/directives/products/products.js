
var productsApp = angular.module('products', []);

productsApp.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/UI/directives/products/product-title.html'
    };
  });


productsApp.controller("ProductsList", ['$scope', ProductsController]);

function ProductsController ($scope) {
   // $scope.products = repositoryProduct.getAll();
    $scope.products =
    [
        {
          "name": "Ваза",
          "price": 4,
          "count": 5,
          "owner": "Galatey",
          "description":"Ваза, с дымчатым покрытием и странным цветком посередке, в приципе - красивая",
          "image": "images/img1.jpg",
        },
        {
          "name": "Розы",
          "price": 4.9,
          "count": 2,
          "owner": "Galatey",
          "description":"Букет роз. Цвета яркие, сочные",
          "image":"images/img2.jpg",
        }
    ];
};

productsApp.controller("ProductForm", ['$scope', ProductForm]);

function ProductForm ($scope) {
    this.product = {};

    this.addProduct = function () {
      $scope.products.push({name:this.product.name,
                            price:this.product.price,
                            description:this.product.description,
                            count:this.product.count,
                            image:this.product.image});
      this.product = {};
    };

};





