var ProductRepository = (function (extendClass,BaseRepository,Storage2) {
  'use strict';

  extendClass(ProductRepository, BaseRepository);

  function ProductRepository() {
    this.storage = new Storage2("product");
  }

  return ProductRepository;
}(require('../../Infrastructure/extend.js'),require('../../Infrastructure/BaseRepository.js'), require('../../Infrastructure/StoragePrototype.js')));

module.exports = ProductRepository;

