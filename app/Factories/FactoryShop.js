var Shops =
{
    Simple: function ()
    {
        console.log("I'm simple");
    }
}

function ShopsFactory(Data){
    this._name = Data.name;
    this._owner = Data.owner;
}

ShopsFactory.prototype =
{
    constructor: ShopsFactory,

    makeSimpleShop: function () {
        return new Shops.Simple();
    }

}

//тест

var factory = new ShopsFactory({name: "Уюттера", owner: "Somebody"})
var shop = factory.makeSimpleShop();

//----------------------

//Модель/Сущности
// function Shop () {
// }

// Shop.createShop = function (Data) {
//   var shop = new Shop();
//   shop.name = Data.name;
//   return shop;
// };


