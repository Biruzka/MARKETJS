var OrderEntity = (function (extendClass,BaseEntity) {
    'use strict';

    extendClass(OrderEntity, BaseEntity);

    function OrderEntity() {
        OrderEntity.superclass.apply(this, arguments);
    }

    OrderEntity.prototype.default = {
        paid: false
    }

    OrderEntity.prototype.payMarker = function () {
        this.set("paid", true);
    }

    OrderEntity.idAttribute = 'id';

    return OrderEntity;
}(require('../../Infrastructure/extend.js'),require('../../Infrastructure/BaseEntity.js')));

module.exports = OrderEntity;
