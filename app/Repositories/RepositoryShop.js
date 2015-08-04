
//репозиторий для каждой сущности свой. этот для shop

function ShopRepository() {
    this._shops = new Storage2();
};

    ShopRepository.prototype.ShopCreate = function (Data) {
        //здесь какая-то обработка//запросы
        var factory = new ShopsFactory(Data)
        //{name: "Уюттера", owner: "Somebody"} - вид Data
        var shop = factory.makeSimpleShop();
        return shop;
    }
    //вот здесь уже запись в бд (или storage или registr) ... это синонимы? или нет - почему так много названий?
    ShopRepository.prototype.ShopSave = function (shop){
        //здесь какая-то обработка
        var id = this._shops.addData(shop); // вернет id
        shop._id = id;
        return shop; //но уже с id
    }

    ShopRepository.prototype.ShopGetById = function (id){
        //здесь какая-то обработка
        return this._shops.getData(id);
    }

    ShopRepository.prototype.ShopUpdate = function (id, data){
        //здесь в storage находится нужная строка
        //потом обрабатывается тут же, заменяется
        return this._shops.updateData(id);   //и просто добавляется в storage в уже измененном виде
        //но пока тупо заменяется объект
    }

    ShopRepository.prototype.ShopDelete = function (id){

        return this._shops.deleteDataFantomly(id);
    }
    //прям конкретное удалить, таки безвозвратно
    ShopRepository.prototype.ShopDestroy = function (id){
        return this._shops.deleteData(id);
    }

    //лучше сделать привязать продукт магазину, чем здесь добавить в магазин продукт.
    //ну даже по бд. поэтому эти методы в репозитории продуктов



