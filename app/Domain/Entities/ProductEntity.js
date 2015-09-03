var ProductEntity = (function () {
    'use strict';
    extendClass(ProductEntity, BaseEntity);

    function ProductEntity() {
        ProductEntity.superclass.apply(this, arguments);
    }

    ProductEntity.prototype.bindShop = function (shop) {
        this.set("owner",shop.getId());
    }

    ProductEntity.prototype.countReduce = function (count) {
    //проверка, чтобы не ушло в минус
        this.set("count",this.get("count")-count);
    }

    ProductEntity.idAttribute = 'id';

    return ProductEntity;
}());
module.exports = ProductEntity;


// ProductEntity.nameAttribute = 'name';

// ProductEntity.prototype.getName = function () {
//   return this.attrs[nameAttribute];
// }

// ProductEntity.prototype.toJSON = function () {
//   return this.attrs;
// }

// ProductEntity.prototype.attachDocument = function () {
// }

// var product = new ProductEntity({ name: '', count: '',owner:'', description:'', price: ''});