var OrderEntity = (function () {
    'use strict';

    extendClass(OrderEntity, BaseEntity);

    function OrderEntity() {
        OrderEntity.__super__.apply(arguments);
    }

    OrderEntity.prototype.default = {
        paid: false;
    }

    Order.prototype.payMaker () {
        this.set("paid", true);
    }

    OrderEntity.idAttribute = 'id';

    return OrderEntity;
}());