module.exports = function(app) {
    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('products', {
            url: '/products',
            template: '<products-list products="products"></products-list>',
        })

        .state('form', {
            url: '/form',
            template: '<product-form></product-form>',
        });
    })
};