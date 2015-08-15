var CustomerEntity = (function () {
  'use strict';

  extendClass(CustomerEntity, BaseEntity);

  function CustomerEntity() {
     CustomerEntity.superclass.apply(arguments);
  }

  CustomerEntity.idAttribute = 'id';

  return CustomerEntity;
}());