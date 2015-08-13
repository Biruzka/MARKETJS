function ProductEntity(attrs) {
    this.attrs = attrs;
}

ProductEntity.prototype.bindShop(shop) {
    this.set("owner",shop.getId());
}

ProductEntity.prototype.countReduce(count) {
    //проверка, чтобы не ушло в минус
   this.set("count",this.get("count")-count);
}

ProductEntity.idAttribute = 'id';

// ProductEntity.nameAttribute = 'name';

// ProductEntity.prototype.getName = function () {
//   return this.attrs[nameAttribute];
// }

// ProductEntity.prototype.toJSON = function () {
//   return this.attrs;
// }

// ProductEntity.prototype.attachDocument = function () {
// }

// var product = new ProductEntity({ name: '', count: '',owner:''});