function Repository(EntityName) {
    this.storage = new Storage2();
    this.entity = EntityName; //Shop, Order, Product, Customer
};

// Repository.prototype.create = function (data) {
//     //здесь какая-то обработка//запросы

//     //{name: "Уюттера", owner: "Somebody"} - вид data
//     var entity = EntityMaker.factory(this.entity, data);
//     return entity;
// }
//вот здесь уже запись в бд (или storage или registr) ... это синонимы? или нет - почему так много названий?
Repository.prototype.save = function (entity){
    //здесь какая-то обработка
    var _id = this.storage.addData(entity); // вернет id
    return _id; //но уже с id
}

Repository.prototype.getById = function (id){
    return this.storage.getData(EntityId.id);                                       //репа с сущностями!!!!!!
}
                                                                                    //domain design
Repository.prototype.update = function (id, data){ //возвращает id
    //здесь в storage находится нужная строка
    //достается, потом обрабатывается тут же, заменяется
    var _id = this.storage.updateData(id, data);
    return  _id; //и просто добавляется в storage в уже измененном виде

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
    var arr = this.storage.search(key, value);
    return arr;
}

Repository.prototype.showAll = function (){
    var arr = this.storage.getAll();
    return arr;
}

//расширение
//сервис локатор


//создание классов ShopRep, ProductRep... сервис локатор - это отдельные классы!
//расширяю классы методами базового репозитория
//


var shopRep = new Repository('Shop');
var productRep = new Repository('Product');
var customerRep = new Repository('Customer');
var orderRep = new Repository('Order');


//Продукты


//он в сервисе
//
productRep.putProductToShop = function (idProduct, idShop) { //данные меняются в entity. изменяю энтити потом в ремпозиторий - сохранить
    var product = this.storage.getData(idProduct); //по id достали объект
    product._owner = idShop; //инициализировали свойство - владелец - его id-шником
    this.storage.updateData(idProduct, product); //и запихнули измененнный продукт
    return idProduct; //return для проверки
}
//!!!
var Service = {

    putProducttoShop: function(prE,shE){
        //меняю сущность через методы класса сущности

    }
}

productRep.getAllProductsOfShop = function (idShop) {
    var arr = new Array;
    arr = this.storage.search("_owner", idShop);
    return arr;
}

// //Заказы

// orderRep.payMarker = function (id){

//     var order = orderRep.getById(id);
//     order._paid = true;
//     orderRep.update(id, order);
// }


//Клиенты

// customerRep.buy = function (orderId){
//     var order = orderRep.getById(orderId);
//     var idProduct = order._productId;

//     var product = productRep.getById(idProduct);


//     if ((product._count - order._count)>=0){

//         successful = transaction(orderId);

//         if (successful===true){
//         //уменьшаяем количество экземпляров товара на складе
//         product._count = product._count - order._count;
//         //отметили, что куплен в order
//         orderRep.payMarker(orderId);
//         return ("Вы успешно оформили заказ");
//         }
//         else return successful; //вернет описание ошибки
//     }

//     else return ("Извините, повторите процесс покупки позднее, сейчас такого товара на складе не наблюдается! Воооот...");
// }

// function transaction (orderId) {
//     return true;
// }











