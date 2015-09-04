var ShopRepository = (function (extendClass,BaseRepository,Storage2) {
  'use strict';

  extendClass(ShopRepository, BaseRepository);

  function ShopRepository() {
    this.storage = new Storage2("shop");
  }

  ShopRepository.loadAllData = function (){
    var arr = this.storage.getAll();

    arr.forEach(function(item, i, arr) {
        arr[i] = new ShopEntity(item);
    });

    return arr;
}

  return ShopRepository;
}(require('../../Infrastructure/extend.js'),require('../../Infrastructure/BaseRepository.js'), require('../../Infrastructure/StoragePrototype.js')));

module.exports = ShopRepository;
