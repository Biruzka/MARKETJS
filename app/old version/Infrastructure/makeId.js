
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

module.exports = makeId;




