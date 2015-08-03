function Shop() { //конструктор

  this.getName = function() {
    return this.name
  };

}

Shop.createShop = function(Data) {
  var shop = new Shop;
  shop.name = Data.name;
  return shop;
}

;(function Run(){
	var Repo = InMemoryStorage(); //создаем хранилище

	var shop = Shop.createShop({ name: 'Уюттера'}); //создаем магазин
  	
  	alert(shop.getName());

})();