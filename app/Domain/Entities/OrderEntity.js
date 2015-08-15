var OrderEntity = (function () {
    'use strict';

    extendClass(OrderEntity, BaseEntity);

    function OrderEntity() {
        OrderEntity.superclass.apply(arguments);
    }

    OrderEntity.prototype.default = {
        paid: false
    }

    OrderEntity.prototype.payMaker = function () {
        this.set("paid", true);
    }

    OrderEntity.idAttribute = 'id';

    return OrderEntity;
}());