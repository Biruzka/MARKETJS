var BaseEntity = function (attrs) {
  this.attrs = attrs;
};

BaseEntity.idAttribute = '_id';

BaseEntity.prototype.id = function () {
  return this.attrs[this.constructor.idAttribute];
};

var a = new BaseEntity({ _id: 88 });
a.constructor;
a.constructor.idAttribute;
a.id(); // 88


function ProductRepository() {} // -
extendClass(ProductRepository, BaseEntity); // -

ProductRepository.idAttribute = 'id';

ProductRepository.prototype.findBy = function (key, value) {
  return this.attrs.name;
};

ProductRepository.prototype.get = function (key) {
  return this.attrs[key];
}

ProductRepository.prototype.toJSON = function () {
  return this.attrs;
}


//
container.register('ProductRepository', ProductRepository);



container.get('ProductRepository').findBy(key, value)


product.constructor;
product.constructor.idAttribute;
product.attrs.id = 99
product.id(); // 99




productRepo.update(productEntity);  /// -> this.storage.set(productEntity.id(), productEntity.toJSON());



ProductEntity.prototype.attachDocument = function (document) {
  // process document
  return DocumentAttachingService.attach(this.documents, file, collection);
};

ProductEntity.create = function (attrs) {
  attrs.name = attrs.name == null ? '' : attrs.name;
  return new ProductEntity(attrs);
};

var product = ProductEntity.create({ name: '123' });



class ProductEntity {

  constructor(attrs) {
    this.attrs = attrs
  }

  getName() {
    return this.attrs.name;
  }

  attachDocument() {}

  static create(attrs) {
    attrs.name = attrs.name == null ? '' : attrs.name;
    return new this(attrs);
  }

  bindShop(shopEntity) {
    var shopId = shopEntity.id();
    this.set('owner', shopId);
  }

}

ProductEntity.create



var WalletFactory = function () {}

WalletFactory.prototype.createIUnauthenticated = function (walletAttributes) {
  walletAttributes.kind = 'individual_unauthenticated';
  return new WalletEntity(walletAttributes);
}

WalletFactory.prototype.createLDemo = function (walletAttributes) {
  walletAttributes.kind = 'legal_entity_demo_account';
  return new WalletEntity(walletAttributes);
}

var walletFactory = new WalletFactory();





var EventEmitter = function () {};
EventEmitter.prototype = {

  emit: function (eventName, eventData) {},

  /**
   * @param  {string}   eventName
   * @param  {Function} callback
   */
  on: function (eventName, callback) {}
};

var eventEmitter = new EventEmitter;

eventEmitter.on('subscribe new magazine', function (event, magazine) {
    console.log(magazine);
});

// --> click
eventEmitter.emit('subscribe new magazine', magazine);



var repo;

repo.findBy(key, value);
repo.findById(id);
repo.findByName(name);






var product = new ProductEntity({ name: 'qwe' });
product.getName() // 'qwe'
product.attachDocument(doc);



var elem = document.getElementById('id');
elem.addEventListener('mouseclick', function () {
  alert('clicked');
});




var Service = {
  putProductToShop: function (productEntity, shopEntity) {
    productEntity.bindShop(shopEntity);
    ProductRepository.update(productEntity);
  }
}

Service.putProductToShop(product, shop);