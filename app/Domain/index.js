// module.exports = function(app) {
//     require('./Entities/CustomerEntity.js')(app);
//     require('./Entities/ProductEntity.js')(app);
//     require('./Entities/ShopEntity.js')(app);
//     require('./Repositories/CustomerRepository.js')(app);
//     require('./Repositories/ShopRepository.js')(app);
//     require('./Repositories/ProductRepository.js')(app);
//     require('./Repositories/OrderRepository.js')(app);
//     require('./Services/BuyService.js')(app);

// };

module.exports = require('./Entities/CustomerEntity.js');
module.exports = require('./Entities/ProductEntity.js');
module.exports = require('./Entities/ShopEntity.js');
module.exports = require('./Entities/OrderEntity.js');
module.exports = require('./Repositories/CustomerRepository.js');
module.exports = require('./Repositories/ShopRepository.js');
module.exports = require('./Repositories/ProductRepository.js');
module.exports = require('./Repositories/OrderRepository.js');
module.exports = require('./Services/BuyService.js');