
//репозиторий для каждой сущности свой. этот для shop

function ShopRepository() {

    //var shops = InMemoryStorage.createStorage();
    var shops = new InMemoryStorage();


    this.ShopCreate = function () {
        //здесь какая-то обработка//запросы
        var shop = new Shop();
        return shop;
    }

    this.ShopSave = function (shop){
        //здесь какая-то обработка
        return this.shops.addData(shop); // вернет id куда-то там
    }

    this.ShopGetById = function (id){
        //здесь какая-то обработка
        return shops.getData(id);
    }

    function ShopUpdate(id, data){
        //здесь какая-то обработка data для бд
        return shops.updateData(id);
    }

    function ShopDelete(id){
        return shops.deleteDataInSt();

    }
    function ShopGetAllProducts(idShops){ // как? внутри id или объект?


        return products;
    }

}
