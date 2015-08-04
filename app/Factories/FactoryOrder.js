var Orders =
{
    Simple: function ()
    {
        console.log("I'm simple");
    }
}

function OrdersFactory(Data){
    this._product = Data.product;
    this._customer = Data.customer;
    this._count = Data.count;
    this._paid = false;
}

OrdersFactory.prototype =
{
    constructor: OrdersFactory,

    makeSimpleOrder: function () {
        return new Orders.Simple();
    }

}

// var factory = new CustomersFactory({name: "Максимилиан"})
// var customer = factory.makeSimpleCustomer();