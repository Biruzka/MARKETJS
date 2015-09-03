
 module.exports = function(app) {
 app.config(function($stateProvider, $urlRouterProvider){
      $stateProvider

        .state('products', {
          url:'/products',
          controller: function ($scope, products) {
            $scope.products = products;
          },
          template: 'Витрина: <products-list products="products"></products-list>',
          resolve: {
            products: function () {
              return $scope.loadProductData();
            }
          }
        })

        .state('form', {
          url:'/form',
          template: '<product-form></product-form>',
        })
    ;
    })
};

