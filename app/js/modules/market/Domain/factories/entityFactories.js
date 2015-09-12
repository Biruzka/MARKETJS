var ProductEntity = require('../entities/ProductEntity.js')

module.exports = function(ng) {
    ng.factory('ProductEntity', ['extend', 'BaseEntity', ProductEntity]);
};