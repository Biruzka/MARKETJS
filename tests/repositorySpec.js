// shopRep = new ShopRepository();

// describe("RepositoryShop", function () {

//     it('should be object', function () {

//         expect(typeof shopRep).toEqual("object");
//     });

//     it('should create storage', function () {

//         expect(typeof shopRep._shops).toEqual("object");
//     });

//     it('should add shop to repository', function () {

//         expect(typeof shopRep.ShopCreate({name: "Уюттера", owner: "Somebody"})).toEqual("object");
//     });

//     it('should save created and returned shop with initialized id', function () {
//         var shop = shopRep.ShopCreate({name: "Уюттера", owner: "Somebody"});
//         shop = shopRep.ShopSave(shop);
//         expect(typeof shop).toEqual("object");
//         expect(shop.hasOwnProperty('_id')).toEqual(true);
//     });

//     it('should get shop by id', function () {
//         var shop = shopRep.ShopCreate({name: "Уюттера", owner: "Somebody"});
//         console.log(shop._name + " тута");
//         shop = shopRep.ShopSave(shop);
//         expect(typeof shopRep.ShopGetById(shop._id)).toEqual("object");
//         console.log(shop); //почему не показывает остальные свойства?
//     });

//      xit('should update data in storage', function () {
//         var shop = shopRep.ShopCreate({name: "Уюттера", owner: "Somebody"});
//         console.log(shop._name);
//         shop = shopRep.ShopSave(shop);
//         shop = shopRep.ShopUpdate(shop._id, {name: "Мега", owner:"SomebodyElse"});
//         expect(shop._name).toEqual("Мега");
//     });

//      xit('should delete data in storage', function () {
//         var shop = shopRep.ShopCreate({name: "Уюттера", owner: "Somebody"});
//         shop = shopRep.ShopSave(shop);
//         expect(typeof shopRep.ShopDestroy(shop._id)).toEqual("undefined");
//         console.log(shop); //почему не показывает остальыне свойства?
//     });

// });