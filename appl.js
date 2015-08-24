var appl = angular.module('appl', [
  'ngRoute',
]);

appl.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'i.html'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }]);