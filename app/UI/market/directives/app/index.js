module.exports = function(app) {
    app.directive('productList', function() {
        return {
            restrict: 'E',
            scope: {
                products:"="
            },
            template: require('./view.html')
        };
    });
};

