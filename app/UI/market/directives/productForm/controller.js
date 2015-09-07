var Controller = function (ProductRepository, $scope, ProductEntity) {
  var setupValidators = function (form) {

        form.price.$validators.number = function (value) {
        return /^\d+$/.test(value); };
        form.price.$validators.required = function (value) {
        return value !== '' && value != null; };
        form.name.$validators.required = function (value) {
        return value !== '' && value != null; };

  };
  $scope.$watch('productForm', setupValidators);


  $scope.submit = function (event) {
    event.preventDefault();
    if ($scope.productForm.$valid) {
      $scope.addProduct($scope.product);
    }
    else {
      console.error('Form invalid');
    }
  };

  $scope.addProduct = function (product) {
    alert("hey, you add product!");
    var prod = new ProductEntity({name:product.name, price:product.price, description:product.description, count:product.count, image:product.image, owner:0});
    ProductRepository.save(prod);
  };
};


Controller.$inject = ['ProductRepository','$scope', 'ProductEntity'];

module.exports = Controller;
