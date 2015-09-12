var Controller = function(ProductEntity, BaseRepository, ProductRepository) {
    var rep = ProductRepository;

    arr = rep.loadAllProductData();
    console.log(arr);

};

Controller.$inject = ['ProductEntity', 'BaseRepository', 'ProductRepository'];
module.exports = Controller;