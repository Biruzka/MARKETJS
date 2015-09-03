// module.exports = function(app) {
//     require('./BaseEntity.js')(app);
//     require('./BaseRepository.js')(app);
//     require('./StoragePrototype.js')(app);
//     require('./helpers.js')(app);
// };

module.exports = require('./BaseEntity.js');
module.exports = require('./BaseRepository.js');
module.exports = require('./StoragePrototype.js');
module.exports = require('./helpers.js');