var OrderEntity = (function () {
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
}());

module.exports = function(app) {
   app.OrderEntity;
};