module.exports = function(app) {
    app.directive('productsList', function() {
        return {
            restrict: 'E',
            scope: {
                products:"="
            },
            controller: require('./controller'),
            template: require('./view.html'),
            controllerAs: 'CtrlList',
            bindToController: true
        };
    });
};






