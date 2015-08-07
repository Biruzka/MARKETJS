


describe("Repository", function () {
    var shop = shopRep.create({name:"MEGA"});
    var product = productRep.create({name: 'Teddy', owner: 'someShop', count: '3'});
    var product2 = productRep.create({name: 'TeddyBear', owner: 'someShop', count: '3'});
    var cust = customerRep.create('Customer', {name: 'Боря'});
    var ord = orderRep.create('Order', {product: 1, customer: 1, count: 5});


    it('should create shop', function () {

        // new Repository();

        expect(typeof shop).toEqual("object");
    });

    it('should create product', function () {

        expect(typeof product).toEqual("object");
    });

    it('should save shop and return id', function () {
        var shopId = shopRep.save(shop);
        expect(typeof shopId).toEqual("number");
    });

    it('should get by id', function () {
        var shopId = shopRep.save(shop);
        expect(typeof shopRep.getById(shopId)).toEqual("object");
    });

    it('should save product', function () {
        expect(typeof product).toEqual("object");
    });

    it('should update shop and return id', function () {
        var shopId = shopRep.save(shop); //возратил id
        shopRep.update(shopId, {name:"NotMEGA"}); //вернуло Id, но оно осталось то же
        console.log(shopRep.getById(shopId).name);
        expect(shopRep.getById(shopId).name).toEqual("NotMEGA");
    });

    it('should destroy shop', function () {
        shop = shopRep.save(shop);
        var id = shop._id;
        shopRep.destroy(id);
        expect(shopRep.getById(id)).toBe(undefined);
    });

    it('should add product to shop', function () {
        var id_s = shopRep.save(shop); //у нас есть id магаза
        var id_p = productRep.save(product);
        productRep.putProductToShop(id_p,id_s);

        var ProdWithOwner = productRep.getById(id_p);

        expect(ProdWithOwner._owner).toEqual(id_s);
    });

    it('should get all products of shop', function () {
        var id_s = shopRep.save(shop);
        var id_p = productRep.save(product);
        var id_p2 = productRep.save(product2);

        productRep.putProductToShop(id_p,id_s);
        productRep.putProductToShop(id_p2,id_s);

        var productsArr = productRep.getAllProductsOfShop(id_s);
        expect(productsArr[0]).toEqual(productRep.getById(id_p));
        expect(id_s).toEqual(productRep.getById(id_p)._owner);
        expect(id_s).toEqual(productRep.getById(id_p2)._owner);

    });

});