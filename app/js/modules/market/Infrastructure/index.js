module.exports = function(ng) {
    require('./BaseEntity.js')(ng);
    require('./BaseRepository')(ng);
    require('./extendClass.js')(ng);
};