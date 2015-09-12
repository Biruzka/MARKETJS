module.exports = function($http, extend, BaseRepository) {

    extend.extendClass(ProductRepository, BaseRepository);

    function ProductRepository() {
        this.type = 'products';
        this.storage = new helper.Storage2("product");
    }

    ProductRepository.loadAllProductData = function() {
        var arr = this.loadAllData(); //здесь мы и вызываем так-то

        arr.forEach(function(item, i, arr) {
            arr[i] = new ProductEntity(item);
        });

        return arr;
    }
    return ProductRepository;

}