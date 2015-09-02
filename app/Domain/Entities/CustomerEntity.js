var CustomerEntity = (function () {
  'use strict';

  extendClass(CustomerEntity, BaseEntity);

  function CustomerEntity() {
     CustomerEntity.superclass.apply(this, arguments);
  }

  CustomerEntity.idAttribute = 'id';

  return CustomerEntity;
}());

module.exports = function(app) {
   app.CustomerEntity;
};