var angular = require('angular');
require('angular-ui-router');

var repositories = require('../../Domain/Repositories/index.js');

var app = angular.module('app.market', ['ui.router', repositories.name]);


require('./directives')(app);
require('./Domain')(app);
require('./router.js')(app);
// require('./Infrastructure')(app);

module.exports = app;



// var BuyService = require('../../Domain/Services/BuyService');
// console.log(BuyService);
// app.service = ("BuyService", BuyService);
