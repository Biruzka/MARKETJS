var angular = require('angular');
require('angular-ui-router');

var app = angular.module('app.market', ['ui.router']);

require('../../Infrastructure/index.js');
require('../../Domain/index.js');

require('./directives/index.js')(app);
require('./router.js')(app);
module.exports = app;
