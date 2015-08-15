//Маркет делает вид, что работает

describe("Market", function () {
    "use strict";

    //Первый магазин

    var shop = new ShopEntity({name: "MEGA"}); //создаем сущность
    shop = ShopRepository.save(shop);

    var product = new ProductEntity({name: 'Teddy', owner: 1, count: '1'});
    product = ProductRepository.save(product);

    Service.putProductToShop(product, shop);

    var arr = Service.getAllProductsOfShop(shop);

    var customer = new CustomerEntity({name: 'Вагиф'});
    customer = CustomerRepository.save(customer);

    var order = new OrderEntity({product:prod1_id, customer: cust1_id, count: 2});
    order = OrderRepository.save(order);

    Service.buy(order);

    if (order.get("paid")===true) {
        console.log("товар" + order + "куплен");
    }

    //проверка запускалки

    // it('should create entity and link them', function () {
    //     expect(typeof shop).toEqual("object");
    //     console.log(shop);
    //     expect(typeof product).toEqual("object");
    //     console.log(product);
    //     expect(typeof customer).toEqual("object");
    //     console.log(customer);
    //     expect(typeof order).toEqual("object");
    //     console.log(order);
    // });

    // it('should show window case of products of certain shop', function () {
    //     console.log("second test:");
    //     console.log(arr[0]+" "+arr[1]+" "+arr[2]);
    //     console.log(arr[0]);
    //     console.log(arr[1]);
    //     expect(arr[0]).toEqual(productRep.getById(prod1_id));
    //     expect(shop1_id).toEqual(productRep.getById(prod1_id)._owner);
    //     expect(shop1_id).toEqual(productRep.getById(prod2_id)._owner);
    // });


    // it('should orders', function () {
    //     var ord = orderRep.getById(order1_id);
    //     console.log("third test:");
    //     console.log(ord);
    //     expect(cust1_id).toEqual(ord._customerId);
    //     expect(prod1_id).toEqual(ord._productId);
    // });

    // it('should buy, products must be deleted', function () {
    //     console.log("fourth test:");
    //     console.log(arr[0]);
    //     console.log(arr[1]);
    //     console.log(new BuyingService(order1_id).pay());
    //     var orderBuyed = orderRep.getById(order1_id);
    //     var arr2 = productRep.getAllProductsOfShop(shop1_id);
    //     expect(orderBuyed._paid).toEqual(true);
    //     console.log("У одного из товаров количество должно было уменьшиться!");
    //     console.log(arr2[0]);
    //     console.log(arr2[1]);
    // });

    // it('should show all storage of smth', function () {
    //     console.log("fifth test:");
    //     var arrProducts = productRep.showAll();
    //     console.log(arrProducts[0]);
    //     console.log(arrProducts[1]);
    //     console.log(arrProducts[2]);
    //     expect(arrProducts).toBeDefined();

    // });

});

















