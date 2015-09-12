var angular = require('angular');
var helper = angular.module('helper', []);


require('./helper.js')(helper);

module.exports = helper;