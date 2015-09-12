// function BaseRepository() {
// };

// BaseRepository.prototype.dbUrl = 'http://localhost:5984/';

// BaseRepository.prototype.save = function (entity){
//     var id = this.storage.addData(entity["attrs"]);
//     entity.giveId(id);
//     return entity;
// }

// //тоже перенести в каждый!
// BaseRepository.prototype.getById = function (id){ //смысл вытаскивать сущность по сущности??? все же по id отдельно может понадобится
//     return this.storage.getData(id);
// }

// BaseRepository.prototype.update = function (entity){
//     this.storage.updateData(entity.getId(),entity["attrs"]);
// }

// BaseRepository.prototype.delete = function (entity){
//     alert(entity.getId());
//     this.storage.deleteData(entity.getId());
// }

// BaseRepository.prototype.search = function (key, value){
//     var arr = this.storage.search(key, value);
//     return arr;
// }

// BaseRepository.prototype.loadAllData = function (){
//     // promice('GET', this.dbUrl+this.type)
//     // .then(function(data){
//     //     data =
//     // })



//     var arr = this.storage.getAll();
//     return arr;
// }

// module.exports = BaseRepository;


// function promiceXHR(method,url,data) {
//     var xhr = new XHMHttpRequest(),
//         promice = new Promice();

//     xhr.open(methon, url, true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 promice.resolve(xhr.responseText);
//             } else {
//                 promice.reject('Error' + xhr.status);
//             }
//         }
//     }
//     xhr.send(data);
//     return promice;
// }

// // promice('GET', 'http://host1/page.json')
// promice('GET', this.dbUrl+this.type)
// .then(function(data){
//     data =
// })


// promice('GET', 'http://host1/page.json')
// .then(function(data) {
//     data = processData(data);
//     var promices = [
//         promiceXHR('POST', 'http://host2/result/',data),
//         promiceXHR('POST', 'http://host3/result/',data)
//     ];

//     return when(promice);
// })
// .then(function (data) {
//     alert('Done!');
// })



//   function ProductRepository() {
//     var dbUrl = 'http://localhost:5984/';
//     var databaseName = 'products';
//     var xhr = new XMLHttpRequest();
//     var that = this;
//     this.products = [];

//     xhr.open('GET', dbUrl + databaseName + '/_all_docs?include_docs=true', true);
//     xhr.setRequestHeader('Content-type', 'application/json');

//     xhr.onreadystatechange = function () {
//       if (this.readyState === this.DONE) {
//         if (this.status === 200) {
//           // for (var i = 0, i<this.response.length, i++) {
//           //   this.products.push(JSON.parse(this.response).rows[i].doc);
//           // }

//           console.log(that.products);
//           that.products = JSON.parse(this.response).rows;
//           console.log(JSON.parse(this.response).rows);
//           console.log(that.products);

//         }
//       }
//     };

//     xhr.send();

//     this.loadAllData = function () {
//        var arr = this.products;
//        console.log("fdxfz");
//        console.log(this);
//        console.log(this.products[0]);

//         // arr.forEach(function(item, i, arr) {
//         //   arr[i] = new ProductEntity(item['doc']);
//         // });

//       return arr;
//     }

//   }



// var dbUrl = 'http://localhost:5984/',
//   databaseName = 'products';

// var xhr = new XMLHttpRequest();
// xhr.open('GET', dbUrl + databaseName + '/_all_docs?include_docs=true', true);
// xhr.setRequestHeader('Content-type', 'application/json');
// xhr.onreadystatechange = function () {
//   if (this.readyState === this.DONE) {
//     if (this.status === 200) {
//       console.log(JSON.parse(this.response).rows[0].value);
//     }
//   }
// };
// xhr.send();


// var ProductRepository = (function () {
//   'use strict';

//   function ProductRepository() {
//     this.storage = "product";

//   }

//   return new ProductRepository();
// }();