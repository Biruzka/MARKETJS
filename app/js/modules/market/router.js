module.exports = function(app) {
    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('products', {
            url: '/products',
            template: '<products-list products=products.products></products-list>',
            resolve: {
                products: Loader
            },
            controller: function(products) {
                this.products = products;
            },
            controllerAs: 'products'

        })

        .state('form', {
            url: '/form',
            template: '<product-form></product-form>',
        });
    })

    var Loader = function(ProductRepository) {
        return ProductRepository.loadAllProductData();
    }
    Loader.$inject = ['ProductRepository'];
};