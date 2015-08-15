var BuyingService = function(orderId) {
}

BuyingService.prototype = {

    saveChanges: function (order,product) {
        orderRepository.update(order);
        productRepository.update(product);
    },

    transaction: function() {
        return true;
    },

    buy: function(order){
        var productId = order.get("productId")
        var product = ProductRepository.getById(productId);

        if (Service.ProductstoOrderEnough(order, product)) {

            var transactionResult = this.transaction();

            if (transactionResult === true){
                //уменьшаяем количество экземпляров товара на складе
                product.countReduce(order.get("count"));
                //отметили, что куплен в order
                order.payMarker();
                //return ("Вы успешно оформили заказ");
                this.saveChanges(order, product);
            }
            else {
                throw new Error(transactionResult);
            }
        }

        else {
            throw new Error('product not avalable');
        }

    }
}











