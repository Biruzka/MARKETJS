//  module.exports = function (ng) {
//     var ProductRepository =
//     productRepository = new
//     ng.value('ProductRepository', require('../../../Domain/Repositories/ProductRepository'));
// };

 module.exports = function (ng) {
    ng.value('ProductRepository', require('../../../Domain/Repositories/ProductRepository'));

};

