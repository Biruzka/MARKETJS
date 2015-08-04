var Customers =
{
    Simple: function ()
    {
        console.log("I'm simple");
    },
    Vip: function ()
    {
        console.log("I'm vip");
    }
}

function CustomersFactory(Data){
    this._name = Data.name;
    this._id = null;
}

CustomersFactory.prototype =
{
    constructor: CustomersFactory,

    makeSimpleCustomer: function () {
        return new Customers.Simple();
    },
    makeVipCustomer: function () {
        return new Customers.Vip();
    }

}

// var factory = new CustomersFactory({name: "Максимилиан"})
// var customer = factory.makeSimpleCustomer();

