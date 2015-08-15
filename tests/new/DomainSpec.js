describe("ShopEntity", function () {

    var shop = new ShopEntity({"name":"Name"});

    for (var item in ShopEntity.prototype) {
        console.log(ShopEntity.prototype[item] + item);
    }

    it ("create shop", function () {
        expect(typeof shop).toEqual("object");
    });

    it ('should have attr', function () {
        expect(typeof shop.attrs).toEqual("object");
    });

    it ('should get id', function () {
        expect(shop.prototype.getId()).toEqual(undefined);
    });

    it ('should give id', function () {
        shop.giveId(2);
        expect(shop.getId()).toEqual(2);
    });

    it ('should get value by key', function () {
        expect(shop.get("name")).toEqual("base");
    });

    it ('should set value by key', function () {
        shop.set("name","base2");
        expect(shop.get("name")).toEqual("base2");
    });

});