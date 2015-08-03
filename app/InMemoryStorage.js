function InMemoryStorage() {

  this.addData = function (Data) {
    var id = this.idCounter();
    this.ListOfData[String(id)] = Data;
    return id;
  };

  this.getData = function (id) {
    if (id in this.ListOfData) {
      return this.ListOfData[id];
    }
    else return false;
  }

  this.updateData = function (id, data) {
    if (id in this.ListOfData) {
      this.ListOfData[String(id)] = Data;
      return true;
    }
    else return false;
  }

  this.deleteDataInSt = function (id) { //добавляем элементу свойство удалено, но не удаляем, лишь помечаем
    //что делать если правда удаляем? отдельный метод для смены id у следующих и уменьшение счетчика id
    //но пока просто помечаем
    if (id in this.ListOfData) {
      this.ListOfData[String(id)].deleted;
      return true;
    }
    else return false; //такого оъекта нет
  }

};

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

InMemoryStorage.createStorage = function () {
  var stor = new InMemoryStorage();
  stor.ListOfData = {}; //в нем таблицы сущностей // внутри свойства: имя - id, а под ними data
  stor.idCounter = makeId();
  return stor;
};




