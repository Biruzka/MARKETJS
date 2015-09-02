module.exports = function(app) {
    require('./Entities/CustomerEntity.js')(app);
    require('./Entities/ProductEntity.js')(app);
    require('./Entities/ShopEntity.js')(app);
    require('./Repositories/CustomerRepository.js')(app);
    require('./Repositories/ShopRepository.js')(app);
    require('./Repositories/ProductRepository.js')(app);
    require('./Repositories/OrderRepository.js')(app);
    require('./Services/BuyService.js')(app);

};