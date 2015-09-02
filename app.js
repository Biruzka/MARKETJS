var angular = require('angular');
var marketApp = require('./app/UI/market/index.js');
var infrastructure = require('./app/Infrastructure/index.js');
var domain = require('./app/Domain/index.js');
require('angular-ui-router');

var app = angular.module('app', [
    'ui.router',
    marketApp.name
]);







