module.exports = function(app) {
    app.directive('productsList', function() {
        return {
            restrict: 'E',
            scope: {
            	products:"="
            },
            controller: require('./controller.js'),
            template: require('./view.html')
        };
    });

    //здесь доступно что в app а занчит можно закинуть через линк что-то
};
