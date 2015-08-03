//Модель
function Shop() { //конструктор
  this.id = null;
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
  product.name = Data.name;

  product.ownerShop = Data.ownerShop;
  return product;
};

                            //Хранилище - как его заоболочить???



  //Использование
  //создаем хранилище
var storage = InMemoryStorage.createStorage();
var shop = Shop.createShop({ name: 'Уюттера'}); //создаем магазин
storage.setShop(shop); //пихаем в хранилище магазин
storage.getShopByName('Уюттера');
storage.getShopById('1'); //вот этот доступ отвести в другое место от сюда нельзя. ну это так проверка
// // ---------------
var product = Product.createProduct({ //создаем товарик
name: 'Ваза',
ownerShop: 'Уюттера',
});

//storage.setProduct(product); //пихаем в хранилище товар
//var productsColl = storage.GetAllProducts('Уюттера');
