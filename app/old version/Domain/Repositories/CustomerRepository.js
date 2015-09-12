// var CustomerRepository = (function (helper,CustomerEntity) {
//     'use strict';

//     helper.extendClass(CustomerRepository, helper.BaseRepository);

//     function CustomerRepository() {
//         this.storage = new helper.Storage2("customer");
//     }

//     CustomerRepository.loadAllCustomerData = function (){
//         var arr = this.loadAllData();

//         arr.forEach(function(item, i, arr) {
//             arr[i] = new CustomerEntity(item);
//         });

//         return arr;
//     }

//   return CustomerRepository;

// }());

// module.exports = CustomerRepository;
