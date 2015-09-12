module.exports = function(ng) {
    require('./entityFactories')(ng);
    require('./repositoryFactories')(ng);
};