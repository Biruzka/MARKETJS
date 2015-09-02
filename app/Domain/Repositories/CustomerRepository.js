var CustomerRepository = (function () {
  'use strict';

  extendClass(CustomerRepository, BaseRepository);

  function CustomerRepository() {
        this.storage = new Storage2("customer");
  }

  return CustomerRepository;
}());

module.exports = CustomerRepository;


