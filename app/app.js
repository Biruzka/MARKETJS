//Маркет делает вид, что работает

function Market() {
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

}();













