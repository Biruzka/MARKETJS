var angular = require('angular');
require('angular-ui-router');

var app = angular.module('app.market', ['ui.router']);



//infrastructure
app.extendClass = require('../../Infrastructure/extend.js');


app.makeId = require('../../Infrastructure/makeId.js');
app.BaseEntity = require('../../Infrastructure/BaseEntity.js');
app.BaseRepository = require('../../Infrastructure/BaseRepository.js');
app.Storage2 = require('../../Infrastructure/StoragePrototype.js');
//domain
app.ProductEntity = require('../../Domain/Entities/ProductEntity.js');

app.ProductRepository = require('../../Domain/Repositories/ProductRepository.js');
app.BuyService = require('../../Domain/Services/BuyService');
app.service = ("BuyService", BuyService);


require('./directives/index.js')(app);
require('./router.js')(app);

module.exports = app;
