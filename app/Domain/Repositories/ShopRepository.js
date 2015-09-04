var ShopRepository = (function (extendClass,BaseRepository,Storage2) {
  'use strict';

  extendClass(ShopRepository, BaseRepository);

  function ShopRepository() {
    this.storage = new Storage2("shop");
  }

  return ShopRepository;
}(require('../../Infrastructure/extend.js'),require('../../Infrastructure/BaseRepository.js'), require('../../Infrastructure/StoragePrototype.js')));

module.exports = ShopRepository;
