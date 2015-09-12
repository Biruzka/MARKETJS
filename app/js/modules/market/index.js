var angular = require('angular');
require('angular-ui-router');

// var helper = require('./Domain/services');

var app = angular.module('app.market', ['ui.router']);

require('./router.js')(app);
require('./Infrastructure/')(app); //загрузила базу для сущностей
require('./Domain/entities')(app); //загрузила все сущности
require('./UI/directives')(app);


var prov = function(extendClass) {
    console.log(extendClass);
    console.log("app");
}
prov.$inject = ['extendClass'];

app.value('Prov', prov);





module.exports = app;