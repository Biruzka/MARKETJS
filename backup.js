//Модель
function Shop() { //конструктор
  this.getName = function () {
    return (this.name);
  };
}

Shop.createShop = function (Data) {
  var shop = new Shop();
  shop.name = Data.name;
  return shop;
};

function Product() { //конструктор
  this.getName = function () {
    return (this.name);
  };
}

Product.createProduct = function (Data) {
  var product = new Product();
  shop.name = Data.name;
  return product;
};

                            //Хранилище

function makeId() {
  var currentCount = 1;

  // возвращаемся к функции
  function counter() {
    return currentCount++;
  }
  return counter;
};

function InMemoryStorage() {
  var shops = {};
  //var products = {};
  function memory() {
    return;
  }
  var IdShops = makeId(); //при вызове counterShops() будет возвращать и увеличивать ID
  var IdProducts = makeId();

  memory.setShop = function (value) {
    shops[String(IdShops())]  = value; //то есть в объект shops добавили counterShops:value(value - объект shop)
    //var id = toString(IdShops());
  };
  memory.setProduct = function (value) {
    products[String(IdProducts())] = value;
  };
  memory.getShopByName = function (name) {
    var item;
    for (item in shops) {
      console.log("HERE: ",item)
      if (item.name === name) {
        return item;
      }
    }
    return null;
  };
  memory.getShopById = function (id) {
    return shops[id]; //(value - объект shop);
  };
  return memory;
}


//Использование

(function Run() {
  var Repo = new InMemoryStorage(); //создаем хранилище
  var shop = Shop.createShop({ name: 'Уюттера'}); //создаем магазин
  Repo.setShop(shop); //пихаем в хранилище магазин
  Repo.getShopByName('Уюттера');
  Repo.getShopById('1'); //вот этот доступ отвести в другое место от сюда нельзя. ну это так проверка
  // ---------------
  // var product = Product.createProduct({ //создаем товарик
  //name: 'Ваза',
  //ownerShop: 'Уюттера'
  //});
  // Repo.setProduct(product); //пихаем в хранилище товар
  // Repo.GetAllProducts('Уюттера');
})();
