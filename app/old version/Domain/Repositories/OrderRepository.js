// var OrderRepository = (function (extendClass,BaseRepository, Storage2) {
//   'use strict';

//   extendClass(OrderRepository, BaseRepository);

//   function OrderRepository() {
//     this.storage = new Storage2("order");
//   }

//   OrderRepository.loadAllData = function (){
//     var arr = this.storage.getAll();

//     arr.forEach(function(item, i, arr) {
//         arr[i] = new OrderEntity(item);
//     });

//     return arr;
//   }

//   return OrderRepository;
// }(require('../../Infrastructure/extend.js'),require('../../Infrastructure/BaseRepository.js'), require('../../Infrastructure/StoragePrototype.js')));


// module.exports = OrderRepository;
