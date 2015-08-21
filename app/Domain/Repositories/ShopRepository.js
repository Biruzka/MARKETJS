var ShopRepository = (function () {
  'use strict';

  extendClass(ShopRepository, BaseRepository);

  function ShopRepository(jsonFile) {
        ShopRepository.superclass.apply(this, arguments);
  }

  return ShopRepository;
}());

