//надо подумать кому отдать методы, прототипу или конкретным. какие куда.

var Shops =
{
    Simple: function ()
    {
        console.log("I'm simple");

    }
}

function ShopsFactory(Data){
    this._name = Data.name;
    this._owner = null;//пока не знаем. начнем закидывать, тогда да (в репозитории где-нибудь)
    this._id = null;
    //возможно тут нужны get и set, но сойдет и напрямую, пока. куда их сюда же?? или в прототайп?
}

ShopsFactory.prototype =
{
    //общие методы фигачить сюда? или выше?
    constructor: ShopsFactory,

    makeSimpleShop: function () {
        return new Shops.Simple();
    }
}

//тест

// var factory = new ShopsFactory({name: "Уюттера", owner: "Somebody"})
// var shop = factory.makeSimpleShop();

//----------------------

//Модель/Сущности
// function Shop () {
// }

// Shop.createShop = function (Data) {
//   var shop = new Shop();
//   shop.name = Data.name;
//   return shop;
// };


