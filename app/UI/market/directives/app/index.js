module.exports = function(app) {
    app.directive('app', function() {
        return {
            restrict: 'E',
            template: require('./view.html')
        };
    });
};

