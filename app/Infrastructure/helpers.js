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


function makeId(ListOfData) {


    var maxId = -1;

    for (var key in ListOfData){
      if (+key > maxId)
        maxId = +key;
    }

    var currentCount = maxId+1;

    // возвращаемся к функции
    function counter() {
        return currentCount++;
    }


    function counterReduce() { //??
        currentCount--;
    }

    return counter;
}


