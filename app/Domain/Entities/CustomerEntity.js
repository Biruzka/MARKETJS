var CustomerEntity = (function () {
  'use strict';

  extendClass(CustomerEntity, BaseEntity);

  function CustomerEntity() {
     CustomerEntity.__super__.apply(arguments);
  }

  CustomerEntity.idAttribute = 'id';

  return CustomerEntity;
}());