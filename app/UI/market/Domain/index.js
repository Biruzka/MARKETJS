module.exports = function (ng) {
    require('./ProductEntity')(ng);
    require('./ShopEntity')(ng);
    require('./CustomerEntity')(ng);
    require('./OrderEntity')(ng);
};