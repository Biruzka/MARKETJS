var Controller = function ($scope) {

    $scope.deleteProduct = function (product) {
	    var entityProduct = repositoryProduct.getById(product.id);
	    entityProduct = new ProductEntity(entityProduct);
	    repositoryProduct.delete(entityProduct);
  	};

    $scope.loadProductData = function () {
        return repositoryProduct.loadAllData();
    }
};

module.exports = Controller;