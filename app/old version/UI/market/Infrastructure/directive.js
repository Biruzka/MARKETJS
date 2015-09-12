var config = function($stateProvider) {

    $stateProvider.state('app.products.index', {
        url: '/products?page',
        template: '<products products="vm.products" />',
        controllerAs: 'vm',
        controller: ['products',
            function(products) {
                this.products = products
            }
        ],
        resolve: {
            products: ['$stateParams', 'ProductRepository',
                function($stateParams, ProductRepository) {
                    // $stateParams.page / ProductListLoader.loadByStateParams($stateParams)
                    return ProductListLoader.loadByStateParams($stateParams);
                    return ProductRepository.load();
                }
            ]
        }
    });

};