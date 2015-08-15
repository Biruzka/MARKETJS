function extendClass (Child, Parent) {

    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.superclass = Parent;


    for (var item in Parent) {
        if (Parent.hasOwnProperty(item)){
            Child[item] = Parent[item];
        }
    }
}

function makeId() {
    var currentCount = 1;

    // возвращаемся к функции
    function counter() {
        return currentCount++;
    }


    function counterReduce() { //??
        currentCount--;
    }

    return counter;
}

