var Controller = function(ProductEntity, ProductRepository) {

    this.deleteClicked = function(event, product) {
        event.preventDefault();
        deleteProduct(product);
    };

    var deleteProduct = function(product) {
        repositories.ProductRepository.delete(product);
    };

    var loadProductData = function() {
        return repositories.ProductRepository.loadAllData();
    }

    this.products = loadProductData();

};

Controller.$inject = ['ProductEntity', ProductRepository];

module.exports = Controller;



//контроллеры должны работать асинхронно