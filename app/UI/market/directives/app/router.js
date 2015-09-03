
 module.exports = function(app) {
 app.config(function($stateProvider, $urlRouterProvider){
      $stateProvider

        .state('products', {
          url:'/products',
          // template:'джь',
          templateUrl:'app/UI/market/directives/productList/view.html',
          // controller: function ($scope, products) {
          //   $scope.products = products;
          // },
          // template: '<products-list products="products"></products-list>some text',
          // resolve: {
          //   products: function () {
          //     return $scope.loadProductData();
          //   }
          // }
        })

        .state('form', {
          url:'/form',
          // template: '<product-form></product-form>hey!',
          template:'jfklemk',
        })
    ;
    })
};

