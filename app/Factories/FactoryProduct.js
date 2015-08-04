
var Products =
{
    Simple: function ()
    {
        console.log("I'm simple");
    }
}

function ProductsFactory(Data){
    this._name = Data.name;
    this._count = Data.ownerShop;
    this._ownerShop = Data.ownerShop;
}

ProductsFactory.prototype =
{
    constructor: ProductsFactory,

    makeSimpleProduct: function () {
        return new Products.Simple();
    }

}

