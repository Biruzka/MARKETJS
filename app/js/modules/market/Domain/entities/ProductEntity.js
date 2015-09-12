var ProductEntity = function(extendClass, BaseEntity) {
    'use strict';

    extendClass(ProductEntity, BaseEntity);

    function ProductEntity() {
        ProductEntity.superclass.apply(this, arguments);
    }

    ProductEntity.prototype.bindShop = function(shop) {
        this.set("owner", shop.getId());
    }

    ProductEntity.prototype.countReduce = function(count) {
        //проверка, чтобы не ушло в минус
        this.set("count", this.get("count") - count);
    }

    ProductEntity.idAttribute = 'id';

    return ProductEntity;
};

ProductEntity.$inject = ['extendClass', 'BaseEntity'];

module.exports = function(ng) {
    ng.value('ProductEntity', ProductEntity);
};