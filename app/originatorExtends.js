(function ExtendAll () {

    repositoryArr = [ShopRepository, ProductRepository, CustomerRepository, OrderRepository];

    Extend(repositoryArr, Repository);

    entityArr = [ShopEntity, ProductEntity, CustomerEntity, OrderEntity];

    Extend(entityArr,BaseEntity);

})();


