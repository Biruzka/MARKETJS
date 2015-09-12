var Controller = function (repositories, $scope, ProductEntity) {

  var setupValidators = function (form) {
    form.price.$validators.number = function (value) {
    return /^\d+$/.test(value); };
    form.price.$validators.required = function (value) {
    return value !== '' && value != null; };
    form.name.$validators.required = function (value) {
    return value !== '' && value != null; };
  };
  $scope.$watch('productForm', setupValidators);

  this.submit = function (event) {

    event.preventDefault();
    if ($scope.productForm.$valid) {
      addProduct(this.product);
    }
    else {
      console.error('Form invalid');
    }
  };

  var addProduct = function (product) {
    alert("hey, you add product!");
    var prod = new ProductEntity({name:product.name, price:product.price, description:product.description, count:product.count, image:product.image, owner:0});
    repositories.ProductRepository.save(prod);
  };
};

Controller.$inject = ['repositories','$scope', 'ProductEntity'];

module.exports = Controller;
