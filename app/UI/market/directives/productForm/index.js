module.exports = function(app) {
    app.directive('producForm', function() {
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