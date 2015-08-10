var BuyingService = function(orderId) {
  this.orderId = orderId;
  this.order = orderRep.getById(orderId);
  this.idProduct = this.order.get("productId");
  this.product = productRep.getById(this.idProduct);
}

BuyingService.prototype = {

    payMarker: function(){
        this.order.set("paid", true);
        orderRep.update(this.orderId, this.order);
    },

    transaction: function() {
        return true;
    },

    productCountReduce: function () {
        this.product.set("count", this.product.get("count") - this.order.get("count"));
        productRep.update(this.idProduct, this.product);
    },

    productInShop: function () {
        return (this.product.get("count") - this.order.get("count") >= 0);
    },

    pay: function(){

        if (this.productInShop()){

            successful = this.transaction();

            if (successful===true){
                //уменьшаяем количество экземпляров товара на складе
                this.productCountReduce();
                //отметили, что куплен в order
                this.payMarker(this.orderId);
                return ("Вы успешно оформили заказ");
            }
            else return successful; //вернет описание ошибки
        }

        else {
            var sorry = "Извините, повторите процесс покупки позднее, сейчас такого товара на складе не наблюдается! Воооот...";
            return sorry;
        }

    }
}

// new BuyingService(orderId).pay();







