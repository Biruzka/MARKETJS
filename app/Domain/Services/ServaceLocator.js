var BuyingService = new BuyingService();

var Service = {

    inherit: function () {
        ExtendAll();
    },

    ProductstoOrderEnough: function (order, product) {
        return (product.get("count") -  order.get("count") >= 0);
    },

    putProductToShop: function (productEn,shopEn){
        productEn.bindShop(shopEn);
        ProductRepository.update(productEn);
    },

    getAllProductsOfShop: function (shopEn) {
        var arr = [];
        arr = productRepository.search(owner,shopEn.getId());
        return arr;
    },

    buy: function (order) {
        try {
            BuyingService.buy(order); //сущность
        }
        catch (e) {
            console.log(e);
        }

    }

}


