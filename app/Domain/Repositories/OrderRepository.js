var OrderRepository = (function () {
  'use strict';

  extendClass(OrderRepository, BaseRepository);

  function OrderRepository(jsonFile) {
        OrderRepository.superclass.apply(this, arguments);
  }

  return OrderRepository;
}());


