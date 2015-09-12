  'use strict';

var factory = function (extendClass, ProductEntity) {

  extendClass(ProductRepository, helper.BaseRepository);

  function ProductRepository() {
    this.type = 'products';
    this.storage = new helper.Storage2("product");
  }

  ProductRepository.loadAllProductData = function () {
       var arr = this.loadAllData(); //здесь мы и вызываем так-то

        arr.forEach(function(item, i, arr) {
          arr[i] = new ProductEntity(item);
        });

    return arr;
  }
  return ProductRepository;

};

factory.$inject = ['extendClass', 'ProductEntity'];

module.exports = function(ng) {
  ng.factory('ProductRepository', factory);
};