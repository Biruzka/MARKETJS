module.exports = function(app) {
    app.directive('productList', function() {
        return {

            restrict: 'E',
            controller: require('./controller.js'),
            template: require('./view.html')
        };
    });
};