var ShopRepository = (function () {
  'use strict';

  extendClass(ShopRepository, BaseRepository);

  function ShopRepository() {
    this.storage = new Storage2("shop");
  }

  return ShopRepository;
}());

module.exports = function(app) {
   app.ShopRepository;
};