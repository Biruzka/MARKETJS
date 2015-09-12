var angular = require('angular');
require('angular-ui-router');

var helper = require('./Domain/services');

var app = angular.module('app.market', ['ui.router']);

require('./router.js')(app);

require('./Infrastructure/')(app);
require('./Domain/factories')(app);
require('./UI/directives')(app);

module.exports = app;