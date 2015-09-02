var angular = require('angular');
require('angular-ui-router');

var app = angular.module('app.market', ['ui.router']);
require('./router.js')(app);
require('./directives/index.js')(app);
module.exports = app;
