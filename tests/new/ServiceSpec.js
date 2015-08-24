describe("BuyService", function () {
    var shop;
    var product;
    var order;
    var customer;
    beforeEach(function(){

        shop = new ShopEntity({name: "MEGA"}); //создаем сущность
        shop = repositoryShop.save(shop);
        console.log(shop);
        console.log("here");


        product = new ProductEntity({name: 'Teddy', owner: 1, count: '1'});
        product = repositoryProduct.save(product);

        Service.putProductToShop(product, shop);

        customer = new CustomerEntity({name: 'Вагиф'});
        customer = repositoryCustomer.save(customer);

        order = new OrderEntity({productId:product.getId(), customerId: customer.getId(), count: 1});
        order = repositoryOrder.save(order);
        beforeCount = product.get("count");
        Service.buy(order);
        afterCount = product.get("count");

    });

    it ('should buy-paid order', function () {
        expect(order.get("paid")).toEqual(true);
    });

    it ('should reduce count of product', function () {
        expect(beforeCount>afterCount).toEqual(true);
    });

});
