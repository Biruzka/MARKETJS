module.exports = function(app) {
    require('./BaseEntity.js')(app);
    require('./BaseRepository.js')(app);
    require('./StoragePrototype.js')(app);
};

