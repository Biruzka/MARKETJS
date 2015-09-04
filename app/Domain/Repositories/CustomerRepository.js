var CustomerRepository = (function (extendClass,BaseRepository,Storage2) {
  'use strict';

  extendClass(CustomerRepository, BaseRepository);

  function CustomerRepository() {
        this.storage = new Storage2("customer");
  }

  return CustomerRepository;
}(require('../../Infrastructure/extend.js'),require('../../Infrastructure/BaseRepository.js'), require('../../Infrastructure/StoragePrototype.js')));

module.exports = CustomerRepository;


