module.exports = function(app) {
    app.directive('productsList', ['ProductRepository',
        function(ProductRepository) {
            return {
                restrict: 'E',
                scope: {
                    products: "="
                },
                controller: require('./controller'),
                template: require('./view.html'),
                controllerAs: 'CtrlList',
                bindToController: true,
                link: function(scope, elem, attrs, ctrl) {
                    ctrl.loadProductData().then(function(resolve) {
                        scope.products = resolve;
                    });

                    console.log(scope);
                }
            };
        }
    ]);


};