module.exports = function(app) {
    app.directive('update',
        function() {
            return {
                restrict: 'E',
                // require: "^productsList",
                template: 'hghjkl',
                // template: '<br><br><label for="name">Описание  </label><br><textarea name="description" ng-model="describe"></textarea><button ng-click="CtrlList.describe($event, product, describe)">Добавить описание</button>',
            };
        }
    );


};