var BaseEntity = function(attrs) {
    this.attrs = attrs;
};

BaseEntity.idAttribute = '_id';

BaseEntity.prototype.getId = function() {
    return this.attrs[this.constructor.idAttribute];
};

BaseEntity.prototype.giveId = function(id) {
    this.attrs[this.constructor.idAttribute] = id;
    return this; //объект?
};

BaseEntity.prototype.get = function(key) {
    return this.attrs[key];
    //дефолтные значения в прототипе
};

BaseEntity.prototype.set = function(key, value) {
    return this.attrs[key] = value;
};


module.exports = function(ng) {
    ng.value('BaseEntity', BaseEntity);
};