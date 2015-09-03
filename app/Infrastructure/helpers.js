module.exports = extendClass;
module.exports = makeId;

function extendClass (Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.superclass = Parent;


    for (var item in Parent) {
        if (Parent.hasOwnProperty(item)){
            Child[item] = Parent[item];
        }
    }
}
function makeId(ListOfData) {


    var maxId = -1;

    for (var key in ListOfData){
      if (+key > maxId)
        maxId = +key;
    }

    var currentCount = maxId+1;

    // возвращаемся к функции
    function counter() {
        return currentCount++;
    }


    function counterReduce() { //??
        currentCount--;
    }

    return counter;
}

// var BuyingService = new BuyingService();

// var Service = {

//     ProductstoOrderEnough: function (order, product) {
//         return (product.get("count") -  order.get("count") >= 0);
//     },

//     putProducttoShop: function (productEn,shopEn){
//         productEn.bindShop(shopEn);
//         ProductRepository.update(productEn);
//     },

//     getAllProductsOfShop: function (shopEn) {
//         var arr = [];
//         arr = productRepository.search(owner,shopEn.getId());
//         return arr;
//     },

//     buy: function (order) {
//         try {
//             BuyingService.buy(order); //сущность
//         }
//         catch (e) {
//             console.log(e);
//         }

//     }

// }



