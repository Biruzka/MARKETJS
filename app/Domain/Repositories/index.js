var Repositories = {
    ProductRepository: require('./ProductRepository.js'),
    ShopRepository: require('./ShopRepository.js'),
    CustomerRepository: require('./CustomerRepository.js'),
    OrderRepository: require('./OrderRepository.js')
}

module.exports = function(app) {
    app.Repositories = Repositories;
};