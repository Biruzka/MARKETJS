var Controller = function(ProductRepository) {

    this.deleteClicked = function(event, product) {
        event.preventDefault();
        deleteProduct(product);
    };

    var deleteProduct = function(product) {
        ProductRepository.delete(product);
    };

    this.loadProductData = function() {
        return ProductRepository.loadAllProductData();
    }

    // this.products = loadProductData();
    // console.log(this.products);

};

Controller.$inject = ['ProductRepository'];

module.exports = Controller;