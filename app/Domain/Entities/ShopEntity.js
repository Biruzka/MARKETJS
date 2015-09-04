var ShopEntity = (function (extendClass,BaseEntity) {
  'use strict';

  extendClass(ShopEntity, BaseEntity);

  function ShopEntity() {
     ShopEntity.superclass.apply(this, arguments);
  }

  // ShopEntity.prototype.giveId = function() {
  //    var id = ShopEntity.superclass.pototype.giveId.call(this);
  //    console.log(id);
  //    return id;
  // };

  ShopEntity.idAttribute = 'id';

  return ShopEntity;
}(require('../../Infrastructure/extend.js'),require('../../Infrastructure/BaseEntity.js')));

module.exports = ShopEntity;


