function CustomerEntity(attrs) {
    this.attrs = attrs;
}

CustomerEntity.idAttribute = 'id';

(function () {
extendClass (CustomerEntity, BaseEntity);
})();

//var customer = new CustomerEntity({name:""});