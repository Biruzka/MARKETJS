var ProductRepository = (function () {
  'use strict';

  extendClass(ProductRepository, BaseRepository);

  function ProductRepository(jsonFile) {
        ProductRepository.superclass.apply(this, arguments);
  }

  return ProductRepository;
}());


