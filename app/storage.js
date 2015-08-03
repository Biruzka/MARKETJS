// function InMemoryStorage() {
//   this.getName = function () {
//     return (this.name);
//   };
// }

// InMemoryStorage.setShop = function (value) {
//     shops[String(IdShops())]  = value; //то есть в объект shops добавили counterShops:value(value - объект shop)
//     //var id = toString(IdShops());
//   };
// InMemoryStorage.setProduct = function (value) {
//     products[String(IdProducts())] = value;
//   };
// InMemoryStorage.getShopByName = function (name) {
//     var item;
//     for (item in shops) {
//       console.log("HERE: ",item)
//       if (item.name === name) {
//         return item;
//       }
//     }
//     return null;
//   };
// InMemoryStorage.getShopById = function (id) {
//     return shops[id]; //(value - объект shop);
//   };

// //СОЗДАНИЕ

// function makeId() {
//   var currentCount = 1;

//   // возвращаемся к функции
//   function counter() {
//     return currentCount++;
//   }
//   return counter;
// };

// InMemoryStorage.createStorage = function() {
//   var storage = new Storage();

//   storage.shop = {};
//   storage.IdShops = makeId();
//   storage.IdProducts = makeId();
//   return shop;
// };





// InMemoryStorage.setShop = function (value) {
//   this.shops[String(this.IdShops())]  = value; //то есть в объект shops добавили counterShops:value(value - объект shop)
// };
// // InMemoryStorage.setProduct = function (value) {
// //   this.products[String(IdProducts())] = value;
// // };
// InMemoryStorage.getShopByName = function (name) {
//   var item;
//   for (item in this.shops) {
//     //console.log("HERE: ", item)
//     if (item.name === name) {
//       return item;
//     }
//   }
//   return null;
// };
// InMemoryStorage.getShopById = function (id) {
//   return this.shops[id]; //(value - объект shop);
// };
