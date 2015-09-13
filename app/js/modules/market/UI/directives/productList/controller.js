var Controller = function(ProductRepository) {

    this.deleteClicked = function(event, product) {
        event.preventDefault();
        deleteProduct(product);
    };

    this.deleteProduct = function(product) {
        ProductRepository.delete(product);
    };

    this.loadProductData = function() {
        var promice = ProductRepository.loadAllProductData();
        promice.then(function(response) {
            return response;
        });
    }

};

Controller.$inject = ['ProductRepository'];

module.exports = Controller;