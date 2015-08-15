var ShopEntity = (function () {
  'use strict';

  extendClass(ShopEntity, BaseEntity);

  function ShopEntity() {
     ShopEntity.superclass.apply(arguments);
  }

  ShopEntity.idAttribute = 'id';

  return ShopEntity;
}());

