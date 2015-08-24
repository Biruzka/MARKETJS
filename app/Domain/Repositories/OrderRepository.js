var OrderRepository = (function () {
  'use strict';

  extendClass(OrderRepository, BaseRepository);

  function OrderRepository() {
    this.storage = new Storage2("order");
  }

  return OrderRepository;
}());


