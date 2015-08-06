function EntityMaker () {} //родительский конструктор

//метод предка
EntityMaker.prototype.introdaction = function (){
    return "hey, my name is "+ this.name;
};

//статический фабричный метод

EntityMaker.factory = function (type, data){

    var constr = type;
    var data = data,
    newentity;


    //ошибка, коль коструктора нема

    if (typeof EntityMaker[constr] !== "function"){
        throw {
            name:"Error",
            message:constr+" doesn't exist!"
        };
    }

    //определяем отношение наследования с предком

    if (typeof EntityMaker[constr].prototype.introdaction !== "function"){
        EntityMaker[constr].prototype = new EntityMaker();
    }

    //создаем новый экземпляр
    newentity = new EntityMaker[constr](data);

    return newentity;
};

//конструкторы сущностей, специализированные

EntityMaker.Shop = function (data) {

    this._name = data.name;
    this._owner = null;//пока не знаем. начнем закидывать, тогда да (в репозитории где-нибудь)
    this._id = null;

};

EntityMaker.Product = function (data) {
    this._name = data.name;
    this._count = data.count;
    this._owner = data.owner;
    this._id = null;
};

EntityMaker.Customer = function (data) {
    this._name = data.name;
    this._id = null;
};

EntityMaker.Order = function (data) {
    this._product = data.product;
    this._customer = data.customer;
    this._count = data.count;
    this._paid = false;
    this._id = null;
};








