var Controller = function ($rootScope, $scope, ProductEntity, ProductRepository) {

    $scope.deleteProduct = function (product) {
	    var entityProduct = $rootScope.repositoryProduct.getById(product.id);
	    entityProduct = new ProductEntity(entityProduct);
	    $rootScope.repositoryProduct.delete(entityProduct);
  	};

    $scope.loadProductData = function () {
        return $rootScope.repositoryProduct.loadAllData();
    }
};

Controller.$inject = ['$rootScope','$scope', 'ProductEntity', 'ProductRepository'];

module.exports = Controller;
