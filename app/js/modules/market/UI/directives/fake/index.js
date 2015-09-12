module.exports = function(app) {
    app.directive('fake', function() {
        return {
            restrict: 'E',
            controller: require('./controller'),
            template: require('./view.html'),
            controllerAs: 'CtrlList',
            bindToController: true
        };
    });
};