//Check types

describe("InMemoryStorage", function() {
    it('should create storage object', function() {
        var storage = InMemoryStorage.createStorage();
        expect(typeof storage).toEqual("object");
    });

    it('should have shops collection', function() {
        var storage = InMemoryStorage.createStorage();
        expect(typeof storage.shops).toEqual("object");
    });



    it('should add shop', function() {
        var storage = InMemoryStorage.createStorage();
        // expect(storage.shops.count).toEqual(0);
        shop = storage.addShop({ name: 'Уюттера'});
        // expect(storage.shops.count).toEqual(1);
        expect(shop.id).not.to.be(null);
        expect(storage.getShopById(shop.id).name).toEqual(shop.name);
    });

    it('should get shop by id', function() {
        var storage = InMemoryStorage.createStorage();
        shop = storage.addShop({ name: 'Уюттера'});
        expect(storage.getShopById(shop.id).name).toEqual("Уюттера");
    });

    xit('should get id by name of shop', function() {
        expect(typeof storage.getShopByName("Уюттера")).toEqual("object");
    });

    xit('should get shop by id', function() {
        expect(storage.getShopById(2)).toEqual(undefined);
    });

    xit('should describe product of right type', function() {
        expect(typeof productsColl).toEqual([]);
    })
});