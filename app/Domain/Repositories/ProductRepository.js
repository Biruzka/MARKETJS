var ProductRepository = (function (extendClass,BaseRepository,Storage2) {
  'use strict';

  extendClass(ProductRepository, BaseRepository);

  function ProductRepository() {
    this.storage = new Storage2("product");
  }

  ProductRepository.loadAllData = function (){
    var arr = this.storage.getAll();

    arr.forEach(function(item, i, arr) {
        arr[i] = new ProductEntity(item);
    });

    return arr;
}

  return ProductRepository;
}(require('../../Infrastructure/extend.js'),require('../../Infrastructure/BaseRepository.js'), require('../../Infrastructure/StoragePrototype.js')));

module.exports = ProductRepository;

