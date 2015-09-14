module.exports = function(app) {
    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('products', {
            url: '/products',
            template: '<products-list products=ctrl.products></products-list>',
            resolve: {
                products: Loader
            },
            controller: function(products) {
                this.products = products;
            },
            controllerAs: 'ctrl',

            views: {
                'update': {
                    // template: '<update></update>'
                    template: 'jfds,'
                }
            }

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