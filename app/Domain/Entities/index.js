var Entities = {
    ProductEntity: require('./ProductEntity.js'),
    ShopEntity: require('./ShopEntity.js'),
    CustomerEntity: require('./CustomerEntity.js'),
    OrderEntity: require('./OrderEntity.js')
}

module.exports = function(app) {
    app.Entities = Entities;
};
