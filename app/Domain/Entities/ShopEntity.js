function ShopEntity(attrs) {
    this.attrs = attrs;
}

ShopEntity.idAttribute = 'id';

(function () {
extendClass (ShopEntity, BaseEntity);
})();
// var shop = new ShopEntity({ name: '', owner:''});