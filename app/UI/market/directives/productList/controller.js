var Controller = function ($scope, $rootScope, ProductEntity, ProductRepository) {

    $scope.deleteClicked = function (event, product) {
        event.preventDefault();
        deleteProduct(product);
    };

    var deleteProduct = function (product) {

        $rootScope.repositoryProduct.delete(product); //и все! и убрать rootScope

	    // var entityProduct = $rootScope.repositoryProduct.getById(product.id);
	    // entityProduct = new ProductEntity(entityProduct);
	    // $rootScope.repositoryProduct.delete(product);
  	};

    var loadProductData = function () {
        return $rootScope.repositoryProduct.loadAllData();
    }

    $scope.products = loadProductData();

};

console.log(Controller.products);



Controller.$inject = ['$scope', '$rootScope', 'ProductEntity', 'ProductRepository'];

module.exports = Controller;