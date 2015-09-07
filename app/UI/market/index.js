var angular = require('angular');
require('angular-ui-router');

var app = angular.module('app.market', ['ui.router']);

require('./directives')(app);
require('./Domain')(app);
require('./Infrastructure')(app);
require('./router.js')(app);

module.exports = app;



// var BuyService = require('../../Domain/Services/BuyService');
// console.log(BuyService);
// app.service = ("BuyService", BuyService);
