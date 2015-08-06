var Repository = function (EntityName) {
    this.storage = new Storage2();
    this.entity = EntityName; //Shop, Order, Product, Customer
}

Repository.prototype.create = function (data) {
    //здесь какая-то обработка//запросы

    //{name: "Уюттера", owner: "Somebody"} - вид data
    var entity = EntityMaker.factory(this.entity, data);
    return entity;
}
//вот здесь уже запись в бд (или storage или registr) ... это синонимы? или нет - почему так много названий?
Repository.prototype.save = function (entity){
    //здесь какая-то обработка
    var id = this.storage.addData(entity); // вернет id
    entity._id = id;
    return entity; //но уже с id
}

Repository.prototype.getById = function (id){
    return this.storage.getData(id);
}

Repository.prototype.update = function (id, data){
    //здесь в storage находится нужная строка
    //достается, потом обрабатывается тут же, заменяется
    return this.storage.updateData(id);   //и просто добавляется в storage в уже измененном виде
    //но пока тупо заменяется объект
}

Repository.prototype.delete = function (id){
    return this.storage.deleteDataFantomly(id);
}
//прям конкретное удалить, таки безвозвратно
Repository.prototype.destroy = function (id){
    return this.storage.deleteData(id);
}

Repository.prototype.search = function (key, value){
    return this.storage.deleteData(id);
}

var shopRep = new Repository('Shop');
var productRep = new Repository('Product');
var customerRep = new Repository('Customer');
var orderRep = new Repository('Order');

productRep.putProductToShop = function (idProduct, idShop) {
    var product = this._products.getData(idProduct); //по id достали объект
    product._owner = idShop; //инициализировали свойство - владелец - его id-шником
    this.storage.updateData(idProduct, product); //и запихнули измененнный продукт
    return product; //return для проверки
}

productRep.getAllProductsOfShop = function (idShop) {
    var arr = new Array;
    arr = this.storage.search("owner", idShop);
    return arr;
}












