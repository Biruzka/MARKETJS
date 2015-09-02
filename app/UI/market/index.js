// var angular = require('./../../bower_components/angular');

var app = angular.module('app.market', ['ui.router']);
require('./directives/index.js')(app);
module.exports = app;