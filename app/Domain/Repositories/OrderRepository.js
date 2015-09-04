var OrderRepository = (function (extendClass,BaseRepository, Storage2) {
  'use strict';

  extendClass(OrderRepository, BaseRepository);

  function OrderRepository() {
    this.storage = new Storage2("order");
  }

  return OrderRepository;
}(require('../../Infrastructure/extend.js'),require('../../Infrastructure/BaseRepository.js'), require('../../Infrastructure/StoragePrototype.js')));


module.exports = OrderRepository;
