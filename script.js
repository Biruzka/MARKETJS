(function(){
  var app = angular.module('store', [ 'store-products']);

  app.controller("StoreController", function() {
    this.products = gem;

    this.addPro = function (product) {
      alert("добавил и увидел");
      this.products.push(product);
    }

  });



  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      //проверяем существует ли свойство reviews - если не т добавляем
      product.reviews.push(this.review);
      this.review = {};
    };


  });

  app.controller("ProductController", function() {
    this.product = {};
    this.add = function() {
      var prod = new ProductEntity({name: this.product.name, owner: 1, count: this.product.count, price: this.product.price, image: this.product.image, description: this.product.descroption});
      alert("ld;,s");
      prod = repositoryProduct.save(product);
      // this.product = {};
    };

  });



  // app.controller("PanelController", function() {

  //   this.tab=1;

  //   this.selectTab = function(setTab) {
  //     this.tab = setTab;
  //   };

  //   this.isSelected = function (setTab) {
  //     return setTab === this.tab;
  //   }
  // });



  var gem = [
    {
      name: 'Ваза',
      price: 4,
      count: 5,
      owner: "Galatey",
      description:"Ваза, с дымчатым покрытием и странным цветком посередке, в приципе - красивая",
      image: "images/img1.jpg",
      canOrdered: true,
      soldOut:false,
      reviews: [
        {
          stars: 5,
          body: "Не разбивается, проверял",
          author: "lol@gmail.com"
        },
        {
          stars: 3,
          body: "Ничешная",
          author: "param@gmail.com"
        },
      ],
    },

    {
      name: 'Розы',
      price: 4.9,
      count: 2,
      owner: "Galatey",
      description:"Букет роз. Цвета яркие, сочные",
      image:"images/img2.jpg",
      canOrdered: true,
      soldOut:false,
      reviews: [],
    }
  ];

return app;
})();