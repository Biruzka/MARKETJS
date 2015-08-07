//Маркет делает вид, что работает

describe("Market", function () {

    //Первый магазин

    var shop = EntityMaker.factory('Shop', {name: "MEGA"}); //создаем сущность
    var shop1_id = shopRep.save(shop); //сохраняем в storage через репозиторий

    var shop2 = EntityMaker.factory('Shop', {name: "MEGA"}); //создаем сущность
    var shop2_id = shopRep.save(shop2); //сохраняем в storage через репозиторий

    //Первый продукт

    var product = EntityMaker.factory('Product', {name: 'Teddy', owner: 1, count: 1});
    var prod1_id = productRep.save(product);
    productRep.putProductToShop(prod1_id, shop1_id); //связываем продукт с магазином владельцем

    //Второй продукт

    var product2 = EntityMaker.factory('Product', {name: 'TeddyBear', owner: 1, count: 1});
    var prod2_id = productRep.save(product2);
    productRep.putProductToShop(prod2_id, shop1_id); //связываем продукт с магазином владельцем

    var product3 = EntityMaker.factory('Product', {name: 'Bag', owner: 0, count: 1});
    var prod3_id = productRep.save(product3);
    productRep.putProductToShop(prod3_id, shop2_id); //связываем продукт с магазином владельцем


    //Достаем продукты конкретного магазина
    var arr = productRep.getAllProductsOfShop(shop1_id);

    //Создаем клиента
    var customer = EntityMaker.factory('Customer', {name: 'Вагиф'});
    var cust1_id = customerRep.save(customer);


    //Добавляем ему заказ
    var order = EntityMaker.factory('Order', {product:prod1_id, customer: cust1_id, count: 1});
    var order1_id = orderRep.save(order);

    //оплачиваем, радуемся, что купили или не купили

    // console.log(customerRep.buy(order1_id));

    //по идее, купили, и ничего не должно было остаться
    // var arr2 = productRep.getAllProductsOfShop(shop1_id);

    //проверка запускалки

    it('should create entity and link them', function () {
        expect(typeof shop).toEqual("object");
        console.log(shop);
        expect(typeof product).toEqual("object");
        console.log(product);
        expect(typeof customer).toEqual("object");
        console.log(customer);
        expect(typeof order).toEqual("object");
        console.log(order);
    });

    it('should show window case of products of certain shop', function () {
        console.log("second test:");
        console.log(arr[0]+" "+arr[1]+" "+arr[2]);
        console.log(arr[0]);
        console.log(arr[1]);
        expect(arr[0]).toEqual(productRep.getById(prod1_id));
        expect(shop1_id).toEqual(productRep.getById(prod1_id)._owner);
        expect(shop1_id).toEqual(productRep.getById(prod2_id)._owner);
    });


    it('should orders', function () {
        var ord = orderRep.getById(order1_id);
        console.log("third test:");
        console.log(ord);
        expect(cust1_id).toEqual(ord._customerId);
        expect(prod1_id).toEqual(ord._productId);
    });

    it('should buy, products must be deleted', function () {
        console.log("fourth test:");
        console.log(arr[0]);
        console.log(arr[1]);
        console.log(customerRep.buy(order1_id));
        var orderBuyed = orderRep.getById(order1_id);
        var arr2 = productRep.getAllProductsOfShop(shop1_id);
        expect(orderBuyed._paid).toEqual(true);
        console.log("У одного из товаров количество должно было уменьшиться!");
        console.log(arr2[0]);
        console.log(arr2[1]);
    });

    it('should show all storage of smth', function () {
        console.log("fifth test:");
        var arrProducts = productRep.showAll();
        console.log(arrProducts[0]);
        console.log(arrProducts[1]);
        console.log(arrProducts[2]);
        expect(arrProducts).toBeDefined();

    });




});

















