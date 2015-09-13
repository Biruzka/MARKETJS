module.exports = function(app) {
    app.directive('productForm', function() {
        return {
            restrict: 'E',
            scope: {
                product: "="
            },
            controller: require('./controller.js'),
            template: require('./view.html'),
            controllerAs: 'CtrlForm',
            bindToController: true
        }

    });
};