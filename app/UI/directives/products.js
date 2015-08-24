(function() {
var app = angular.module('store-products',[]);

 app.directive('productPanels', function(){
    return{
      restrict:'E',
      templateUrl:'../presenters/product-panels.html',
      controller: function () {

          this.tab=1;

          this.selectTab = function(setTab) {
          this.tab = setTab;
          };

          this.isSelected = function (setTab) {
          return setTab === this.tab;
          }

      },
      controllerAs:'panel',
    }


  });

  app.directive('productTitle', function() {
    return {
      restrict:'E',
      templateUrl:'/../presenters/product-title.html'
    };
  });

})();