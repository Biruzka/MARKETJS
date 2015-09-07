module.exports = function (ng) {
 	var ProductRepository = require('../../../Domain/Repositories/ProductRepository');
 	console.log( ProductRepository);
    ng.value('ProductRepository', ProductRepository);
};

