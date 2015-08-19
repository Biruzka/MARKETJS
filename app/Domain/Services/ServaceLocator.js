var BuyingService = new BuyingService();
var repositoryShop = new ShopRepository();
var repositoryProduct = new ProductRepository();
var repositoryCustomer = new CustomerRepository();
var repositoryOrder = new OrderRepository();

var Service = {

    inherit: function () {
        ExtendAll();
    },

    ProductstoOrderEnough: function (order, product) {
        return (product.get("count") -  order.get("count") >= 0);
    },

    putProductToShop: function (productEn,shopEn){
        productEn.bindShop(shopEn);
        repositoryProduct.update(productEn);
    },

    getAllProductsOfShop: function (shopEn) {
        var arr = [];
        arr = repositoryProduct.search("owner",shopEn.getId());
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


