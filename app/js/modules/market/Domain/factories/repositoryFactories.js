var ProductRepository = require('../repositories/ProductRepository.js')

module.exports = function(ng) {
    ng.factory('ProductRepository', ['$http', 'extend', 'BaseRepository', ProductRepository]);
};