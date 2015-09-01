var angular = require('angular');
var app = angular.module('app.market', []);

require('./directives/index.js')(app);


module.exports = app;