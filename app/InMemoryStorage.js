function InMemoryStorage() {

  this.getName = function () {
    return (this.name);
  };

  this.addShop = function (shop) {
    var id = this.IdShops();
    shop.id = id;
    this.shops[String(id)] = shop; //то есть в объект shops добавили counterShops:value(value - объект shop)
    return shop;
  };
  // InMemoryStorage.setProduct = function (value) {
  //   this.products[String(IdProducts())] = value;
  // };

  this.getShopByName = function (name) {
    var item;
    for (item in this.shops) {
      if (item.name === name) {
        return item;
      }
    }
    return null;
  };

  this.getShopById = function (id) {
    return this.shops[id]; //(value - объект shop);
  };

  this.setProduct = function (value) {
    this.products[String(this.IdProducts())] = value; //то есть в объект shops добавили counterShops:value(value - объект shop)
  };

  this.GetAllProducts = function (name) { //name - shop
    var item;
    var collectionProduct = [];
    for (item in this.products) {
        console.log("Здесь! " + item);
        console.log(name + " ИМЯ");
      if (item.ownerShop === name) {
        collectionProduct.push(item);
      }
    }
    console.log(collectionProduct);
    return collectionProduct;
  }
}

//СОЗДАНИЕ

function makeId() {
  var currentCount = 1;

  // возвращаемся к функции
  function counter() {
    return currentCount++;
  }
  return counter;
}

InMemoryStorage.createStorage = function () {
  var stor = new InMemoryStorage();
  stor.shops = {};
  stor.products = {};
  stor.IdShops = makeId();
  stor.IdProducts = makeId();
  return stor;
};