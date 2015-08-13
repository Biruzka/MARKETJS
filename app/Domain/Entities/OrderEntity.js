function OrderEntity(attrs) {
    this.attrs = attrs;
    this.attrs.paid = this.defolt[paid];
}

OrderEntity.defolt = {
    paid: false;
}
Order.prototype.payMaker () {
    order.set("paid", true);
}

OrderEntity.idAttribute = 'id';

(function () {
extendClass (OrderEntity, BaseEntity);
})();

//var order = new OrderEntity({productId:'', customerId:'',count:''});