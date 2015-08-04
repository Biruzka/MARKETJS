
 function Storage() {

  this.ListOfData = {}; //в нем таблицы сущностей // внутри свойства: имя - id, а под ними data
  this.idCounter = makeId();

  this.addData = function (Data) {
    var id = this.idCounter();
    this.ListOfData[id] = Data;
    return id;
  };

  this.getData = function (id) {
      return this.ListOfData[id];
  };

  this.updateData = function (id, data) {
      this.ListOfData[id] = data;
      return this.ListOfData[id];
  };

  this.deleteData = function (id) {
    delete this.ListOfData[id];
    return this.ListOfData[id];
  };

  this.deleteDataFantomly = function (id) { //добавляем элементу свойство удалено, но не удаляем, лишь помечаем
    //что делать если правда удаляем? отдельный метод для смены id у следующих и уменьшение счетчика id
    //но пока просто помечаем
    if ( id in this.ListOfData) {
      this.ListOfData[String(id)].deleted = true;
    }
    return this.ListOfData[String(id)]; //такого оъекта нет
  }

};


//Понадобится ли фабрика?? пока объект создается как обычно - через new. но можено и без

// Storage.createStorage = function () {
//   var stor = new Storage();
//   stor.ListOfData = {}; //в нем таблицы сущностей // внутри свойства: имя - id, а под ними data
//   stor.idCounter = makeId();
//   return stor;
// };

//Как вынести в модуль этот счетчик, который может еще где-нибудь понадобиться???

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







