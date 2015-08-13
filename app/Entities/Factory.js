function EntityMaker () {} //родительский конструктор

//метод предка
EntityMaker.prototype.introduction = function (){
    return "hey, my name is "+ this.name;
};


EntityMaker.prototype.get = function (key){
    var keyName = "_"+key;
    return this[keyName];
};

EntityMaker.prototype.set = function (key,value){
    var keyName = "_"+key;
    this[keyName] = value;
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

    if (typeof EntityMaker[constr].prototype.introduction !== "function"){
        EntityMaker[constr].prototype = new EntityMaker();
    }

    //создаем новый экземпляр
    newentity = new EntityMaker[constr](data);

    return newentity;
};

//конструкторы сущностей, специализированные

EntityMaker.Shop = function (data) {

    this._name = data.name;
    this._owner;//пока не знаем. начнем закидывать, тогда да (в репозитории где-нибудь)
    this._id;

};


EntityMaker.Product = function (data) {
    this._name = data.name;
    this._count = data.count;
    this._owner = data.owner;
    this._id;
};

EntityMaker.Customer = function (data) {
    this._name = data.name;
    this._id;
};

EntityMaker.Order = function (data) {
    this._productId = data.product;
    this._customerId = data.customer;
    this._count = data.count;
    this._paid = false;
    this._id;
};








