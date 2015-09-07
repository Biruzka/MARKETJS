var Controller = function ($scope, ProductRepository, ProductEntity) {

    $scope.deleteClicked = function (event, product) {
        event.preventDefault();
        deleteProduct(product);
    };

    var deleteProduct = function (product) {
        ProductRepository.delete(product); 
  	};

    var loadProductData = function () {
        console.log(ProductRepository.loadAllData);
        return ProductRepository.loadAllData();
    }

    $scope.products = loadProductData();

};

console.log(Controller.products);



Controller.$inject = ['$scope', 'ProductRepository', 'ProductEntity'];

module.exports = Controller;