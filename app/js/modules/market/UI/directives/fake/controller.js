var Controller = function(ProductEntity, Prov) {
    console.log('controller and Product');
    console.log(ProductEntity);
    console.log(Prov);
    Prov();
};

Controller.$inject = ['ProductEntity', 'Prov'];

module.exports = Controller;