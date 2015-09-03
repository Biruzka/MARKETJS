var angular = require('angular');
var marketApp = require('./app/UI/market/index.js');
require('angular-ui-router');

var app = angular.module('app', [
    'ui.router',
    marketApp.name
]);















