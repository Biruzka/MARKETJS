module.exports = function(app) {
    app.directive('productList', function() {
        return {
            restrict: 'E',
            scope: {
            	products:"="
            },
            controller: require('./controller.js'),
            template: require('./view.html')
        };
    });
};

