describe("Factory", function () {

    it('should return object shop', function () {
        var shop1 = EntityMaker.factory('Shop', {name: 'Уюттера'});
        expect(typeof shop1).toEqual("object");
        console.log(shop1);
    });

    it('should return object product', function () {
        var pr1 = EntityMaker.factory('Product', {name: 'Teddy', owner: 'someShop', count: '3'});
        expect(typeof pr1).toEqual("object");
        console.log(pr1);
    });

    it('should return object customer', function () {
        var cust1 = EntityMaker.factory('Customer', {name: 'Боря'});
        expect(typeof cust1).toEqual("object");
        console.log(cust1);
    });

    it('should return object order', function () {
        var ord1 = EntityMaker.factory('Order', {product: 'Teddy', customer: 'Боря', count: 1});
        expect(typeof ord1).toEqual("object");
        console.log(ord1);
    });

});