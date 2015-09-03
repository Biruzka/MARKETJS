var angular = require('angular');
var marketApp = require('./app/UI/market/index.js');
require('angular-ui-router');


require('./app/Infrastructure/extend.js');
require('./app/Infrastructure/makeId.js');
require('./app/Infrastructure/BaseEntity.js');
require('./app/Infrastructure/BaseRepository.js');
require('./app/Infrastructure/StoragePrototype.js');
//domain
require('./app/Domain/Entities/ProductEntity.js');
require('./app/Domain/Repositories/ProductRepository.js');

var app = angular.module('app', [
    'ui.router',
    marketApp.name
]);















