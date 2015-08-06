
var shop = shopRep.create({name:"MEGA"});
var product = productRep.create({name: 'Teddy', owner: 'someShop', count: '3'});
var cust = custRep.create('Customer', {name: 'Боря'});
var ord = orderRep.create('Order', {product: 'Teddy', customer: 'Боря', count: 1});

describe("Repository", function () {

    it('should create shop', function () {

        expect(typeof shop).toEqual("object");
    });

    it('should create product', function () {

        expect(typeof product).toEqual("object");
    });

    it('should save shop and get by id', function () {
        shop = shopRep.save(shop);
        var id = shop._id;
        expect(id).toBeDefined();
    });

    it('should get by id', function () {
        shop = shopRep.save(shop);
        var id = shop._id;
        expect(shopRep.getById(id)).toBe(shop);
    });

    it('should save product', function () {

        expect(typeof product).toEqual("object");
    });

    it('should update shop', function () {
        shop = shopRep.save(shop);
        var id = shop._id;
        var shopUpdated = shopRep.update(id, {name:"NotMEGA"});
        expect(shopUpdated._name).notToBe(shop._name);
    });

    it('should destroy shop', function () {
        shop = shopRep.save(shop);
        var id = shop._id;
        shopRep.destroy(id);
        expect(shopRep.getById(id)).toBe(undefined);
    });

    it('should add product to shop', function () {
        shop = shopRep.save(shop);
        var id_s = shop._id;

        product = productRep.save(product);
        var id_p = product._id;
        productRep.putProductToShop(id_p,id_s);
        var productWithOwner = productRep.getById(id_p);
        expect(productWithOwner._owner).toBeDefined();
    });

    it('should get all products of shop', function () {
        shop = shopRep.save(shop);
        var id_s = shop._id;
        product = productRep.save(product);
        var id_p = product._id;
        productRep.putProductToShop(id_p,id_s);
        var productWithOwner = productRep.getById(id_p);
        expect(productRep.getAllProductsOfShop).toBeDefined();
    });










});