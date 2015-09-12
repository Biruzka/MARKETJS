var angular = require('angular');

var helper = angular.module('helper', []);

helper.value('extendClass', require('./extend.js'));
helper.value('BaseRepository', require('./BaseRepository.js'));
helper.value('Storage2', require('./StoragePrototype.js'));

// helper.extendClass = require('./extend.js');
// helper.BaseRepository = require('./BaseRepository.js');
// helper.Storage2 = require('./StoragePrototype.js');

module.exports = helper;

helper.run(function (extendClass) {
    console.log(1, extendClass);
});
