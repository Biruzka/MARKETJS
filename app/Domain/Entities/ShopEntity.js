var ShopEntity = (function () {
  'use strict';

  extendClass(ShopEntity, BaseEntity);

  function ShopEntity() {
     ShopEntity.__super__.apply(arguments);
  }

  ShopEntity.idAttribute = 'id';

  return ShopEntity;
}());