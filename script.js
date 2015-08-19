(function(){
  var app = angular.module('store', [ ]);

  app.controller("StoreController", function() {
    this.products = gem;

  });

  var gem = [
    {
      name: 'Product1',
      price: 4.98,
      description:"good, relly",
      canOrdered: true,
      soldOut:false,
    },

    {
      name: 'Product2',
      price: 4.9,
      description:"good, not relly",
      canOrdered: true,
      soldOut:false,
    }
  ];

return app;
})();