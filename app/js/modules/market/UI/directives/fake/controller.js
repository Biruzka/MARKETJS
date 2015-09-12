var Controller = function(ProductEntity, BaseRepository) {
    var rep = new BaseRepository('http://localhost:5984/products');
    console.log(rep);

};

Controller.$inject = ['ProductEntity', 'BaseRepository'];
module.exports = Controller;