// function extendClass(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
//     Child.superclass = Parent;


//     for (var item in Parent) {
//         if (Parent.hasOwnProperty(item)) {
//             Child[item] = Parent[item];
//         }
//     }
// }

// module.exports = function(ng) {
//     ng.value('extendClass', extendClass);
// };

// // module.exports = extendClass;


// function extendClass(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
//     Child.superclass = Parent;


//     for (var item in Parent) {
//         if (Parent.hasOwnProperty(item)) {
//             Child[item] = Parent[item];
//         }
//     }
// }

module.exports = function(ng) {
    ng.factory('extend', function() {
        return {
            extendClass: function(Child, Parent) {
                Child.prototype = Object.create(Parent.prototype);
                Child.prototype.constructor = Child;
                Child.superclass = Parent;


                for (var item in Parent) {
                    if (Parent.hasOwnProperty(item)) {
                        Child[item] = Parent[item];
                    }
                }

            }
        };
    });
};