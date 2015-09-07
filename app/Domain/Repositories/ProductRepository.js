var ProductRepository = (function (ProductEntity, extendClass, BaseRepository, Storage2) {
  'use strict';

  extendClass(ProductRepository, BaseRepository);

  function ProductRepository() {
    this.storage = new Storage2("product");

    this.loadAllData = function () {
       var arr = this.storage.getAll();

        arr.forEach(function(item, i, arr) {
          arr[i] = new ProductEntity(item);
        });

    return arr;
    }

  }

  return ProductRepository;

}(require('../Entities/ProductEntity.js'),require('../../Infrastructure/extend.js'),require('../../Infrastructure/BaseRepository.js'), require('../../Infrastructure/StoragePrototype.js')));

var repositoryProduct = new ProductRepository();

module.exports = repositoryProduct;



// var ProductRepository = (function () {
//   'use strict';

//   function ProductRepository() {
//     this.storage = "product";

//   }

//   return new ProductRepository();
// }();


