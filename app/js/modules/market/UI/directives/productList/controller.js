var Controller = function(ProductRepository) {

    this.deleteClicked = function(event, product) {
        event.preventDefault();
        //должен вернуть измененную сущность продукт
        this.deleteProduct(product).then(function(response) {
            product = response;
        });

        console.log(product);

        //this.products[] проверить изменится ли по ссылке, если нет, то через this.products
    };

    // возвращает продукт со свойством удален!
    this.deleteProduct = function(product) {
        ProductRepository.delete(product); //в базе записываем свойство делитед дальше апдейт вызываем внутри
        return ProductRepository.syncEntity(product); //по ссылке ли?  должны вернуть уже измененный entity
    };

    this.loadProductData = function() {
        var promice = ProductRepository.loadAllProductData();
        promice.then(function(response) {
            return response;
        });
    };

    this.productExist = function(product) {
        return !product.get("deleted");

    }

};

Controller.$inject = ['ProductRepository'];

module.exports = Controller;