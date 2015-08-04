function ProductRepository() {
    this._products = new Storage2();
};

    ProductRepository.prototype.ProductCreate = function (Data) {
        //здесь какая-то обработка//запросы
        var factory = new ProductsFactory(Data)
        //{name: "Уюттера", owner: "Somebody"} - вид Data
        var product = factory.makeSimpleProduct();
        return shop;
    }
    //вот здесь уже запись в бд (или storage или registr) ... это синонимы? или нет - почему так много названий?
    ProductRepository.prototype.ProductSave = function (product){
        //здесь какая-то обработка
        var id = this._products.addData(shop); // вернет id
        product._id = id;
        return product; //но уже с id
    }

    ProductRepository.prototype.ProductGetById = function (id){
        //здесь какая-то обработка
        return this._products.getData(id);
    }

    ProductRepository.prototype.ProductUpdate = function (id, data){
        //здесь в storage находится нужная строка
        //потом обрабатывается тут же, заменяется
        return this._products.updateData(id);   //и просто добавляется в storage в уже измененном виде
        //но пока тупо заменяется объект
    }

    ProductRepository.prototype.ProductDelete = function (id){
        return this._products.deleteDataFantomly(id);
    }
    //прям конкретное удалить, таки безвозвратно
    ProductRepository.prototype.ProductDestroy = function (id){
        return this._products.deleteData(id);
    }

    ProductRepository.prototype.PutProductToShop  = function (idProduct, idShop){ // как? внутри id или объект?
        var product = this._products.getData(idProduct); //по id достали объект
        product._owner = idShop; //инициализировали свойство - владелец - его id-шником
        this._products.updateData(idProduct, product); //и запихнули измененнный продукт
        return product; //return для проверки
    }

    ProductRepository.prototype.GetAllProductsOfShop  = function (idShop){ // как? внутри id или объект?
        var arr = new Array;
        arr = this._products.getDataWithThatValueByKey("owner", idShop);
        return arr;
    }

