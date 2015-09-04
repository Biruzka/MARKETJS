var CustomerRepository = (function (extendClass,BaseRepository,Storage2) {
    'use strict';

    extendClass(CustomerRepository, BaseRepository);

    function CustomerRepository() {
        this.storage = new Storage2("customer");
    }

    CustomerRepository.loadAllData = function (){
        var arr = this.storage.getAll();

        arr.forEach(function(item, i, arr) {
            arr[i] = new CustomerEntity(item);
        });

        return arr;
    }

  return CustomerRepository;

}(require('../../Infrastructure/extend.js'),require('../../Infrastructure/BaseRepository.js'), require('../../Infrastructure/StoragePrototype.js')));

module.exports = CustomerRepository;
