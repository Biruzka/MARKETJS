//Маркет делает вид, что работает

function Market() {
    var shop = EntityMaker.factory('Shop', {name: "MEGA"}); //создаем сущность
    var shop1_id = shopRep.save(shop); //сохраняем в storage через репозиторий

    var product = EntityMaker.factory('Product', {name: 'Teddy', owner: 1, count: '1'});
    var prod1_id = productRep.save(product);

    productRep.putProductToShop(prod1_id, shop1_id); //связываем продукт с магазином владельцем

    var arr = productRep.getAllProductsOfShop(shop1_id);

    var customer = EntityMaker.factory('Customer', {name: 'Вагиф'});
    var cust1_id = customerRep.save(customer);

    var order = EntityMaker.factory('Order', {product:prod1_id, customer: cust1_id, count: 2});
    var order1_id = orderRep.save(order);

    //оплачиваем, радуемся, что купили или не купили

    console.log(customerRep.buy(ord1_id));


    var arr = productRep.getAllProductsOfShop(shop1_id); //по идее, купили, и ничего не должно было остаться

}();













