var angular = require('./bower_components/angular');
var marketApp = require('./app/UI/market/index.js');
var infrastructure = require('./app/Infrastructure/index.js');
var domain = require('./app/Domain/index.js');

var app = angular.module('app', [
    marketApp.name, angular.name, infrastructure.name, domain.name
]);





