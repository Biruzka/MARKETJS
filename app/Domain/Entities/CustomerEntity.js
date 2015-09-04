
var CustomerEntity = (function (extendClass,BaseEntity) {
  'use strict';
//либо прямо здесь

    extendClass(CustomerEntity, BaseEntity);

  function CustomerEntity() {
     CustomerEntity.superclass.apply(this, arguments);
  }

  CustomerEntity.idAttribute = 'id';

  return CustomerEntity;


}(require('../../Infrastructure/extend.js'),require('../../Infrastructure/BaseEntity.js')));


module.exports = CustomerEntity;
