module.exports = function(extend, BaseEntity) {

    extend.extendClass(ProductEntity, BaseEntity);

    function ProductEntity() {
        ProductEntity.superclass.apply(this, arguments);
    }

    ProductEntity.prototype.bindShop = function(shop) {
        this.set("owner", shop.getId());
    }

    ProductEntity.prototype.countReduce = function(count) {
        //проверка, чтобы не ушло в минус
        this.set("count", this.get("count") - count);
    }

    ProductEntity.idAttribute = 'id';

    return ProductEntity;
}


// module.exports = function(ng) {
//     ng.factory('ProductEntity', ['extend', 'BaseEntity',
//         function(extend, BaseEntity) {

//             extend.extendClass(ProductEntity, BaseEntity);

//             function ProductEntity() {
//                 ProductEntity.superclass.apply(this, arguments);
//             }

//             ProductEntity.prototype.bindShop = function(shop) {
//                 this.set("owner", shop.getId());
//             }

//             ProductEntity.prototype.countReduce = function(count) {
//                 //проверка, чтобы не ушло в минус
//                 this.set("count", this.get("count") - count);
//             }

//             ProductEntity.idAttribute = 'id';

//             return ProductEntity;
//         }
//     ]);
// };
// module.exports = function(ng) {
//     ng.factory('factoryEntity', ['extend', 'BaseEntity',
//         function(extend, BaseEntity) {
//             return {
//                 ProductEntity: function() {
//                     // console.log(arguments);
//                     'use strict';
//                     extend.extendClass(ProductEntity, BaseEntity);

//                     function ProductEntity(arguments) {
//                         ProductEntity.superclass.apply(this, arguments);
//                     }

//                     ProductEntity.prototype.bindShop = function(shop) {
//                         this.set("owner", shop.getId());
//                     }

//                     ProductEntity.prototype.countReduce = function(count) {
//                         //проверка, чтобы не ушло в минус
//                         this.set("count", this.get("count") - count);
//                     }

//                     ProductEntity.idAttribute = 'id';

//                     return new ProductEntity;
//                 }
//             }
//         }
//     ]);
// };



//-----------


// var ProductEntity = function(extend, BaseEntity) {
//     'use strict';
//     console.log("ZEEEE");
//     console.log(extend);

//     extend.extendClass(ProductEntity, BaseEntity);

//     function ProductEntity() {
//         ProductEntity.superclass.apply(this, arguments);
//     }

//     ProductEntity.prototype.bindShop = function(shop) {
//         this.set("owner", shop.getId());
//     }

//     ProductEntity.prototype.countReduce = function(count) {
//         //проверка, чтобы не ушло в минус
//         this.set("count", this.get("count") - count);
//     }

//     ProductEntity.idAttribute = 'id';

//     return ProductEntity;
// };

// ProductEntity.$inject = ['extend', 'BaseEntity'];

// // module.exports = function(ng) {
// //     ng.value('ProductEntity', ProductEntity);
// // };