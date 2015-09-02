var ProductRepository = (function () {
  'use strict';

  extendClass(ProductRepository, BaseRepository);

  function ProductRepository() {
    this.storage = new Storage2("product");
  }

  return ProductRepository;
}());

module.exports = ProductRepository;

