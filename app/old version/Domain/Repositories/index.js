var angular = require('angular');
var helper = require('../../Infrastructure/helper.js');


var repositories = angular.module('repositories', [helper.name]);


repositories.value('ProductEntity', require('../Entities/ProductEntity.js'));
require('./ProductRepository')(repositories);
module.exports = repositories;

