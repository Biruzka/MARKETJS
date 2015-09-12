var Controller = function(repositories, ProductEntity) {

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

Controller.$inject = ['repositories', 'ProductEntity'];

module.exports = Controller;



//контроллеры должны работать асинхронно