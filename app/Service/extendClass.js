function extendClass (Child, Parent) {


    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;


    for (var item in Parent) {
        if (Parent.hasOwnProperty(item)){
            Child.item = Parent.item;
        }
    }

}

function Extend (arrChild,Parent) {
    for (var Child in arrChild) {
        extendClass(Child,Parent);
    }
}


//где вызывается само наследование?