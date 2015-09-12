// var angular = require('angular');
// var marketApp = require('./app/UI/market/index.js');
// require('angular-ui-router');

// var repositories = require('./app/Domain/Repositories/index.js');

// var app = angular.module('app', [
//     'ui.router', repositories.name,
//     marketApp.name
// ]);
//

var angular = require('angular');
var marketApp = require('./app/js/modules/market/index.js');
require('angular-ui-router');

// var repositories = require('./app/Domain/Repositories/index.js');

var app = angular.module('app', [
    'ui.router',
    marketApp.name
]);