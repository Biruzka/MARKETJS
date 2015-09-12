module.exports = function($http, extend, BaseRepository, ProductEntity) {

    extend.extendClass(ProductRepository, BaseRepository);

    function ProductRepository() {
        this.url = 'http://localhost:5984/products';
    }


    ProductRepository.prototype.loadAllProductData = function() {
        //получаем экстракт
        return this.load().then(function(response) {
            //создаем из данных сущности
            var arr = this.produceEntity(response);
            return arr;
        }.bind(this));
    }

    /**
     * @param  {(Array.<Object>|Object)}
     * @return {(Array.<Entity>|Entity)}
     */
    ProductRepository.prototype.produceEntity = function(arr) {
        var arr = arr;

        arr.forEach(function(item, i, arr) {
            arr[i] = new ProductEntity(item);
        });

        return arr;

    };

    return new ProductRepository;
}