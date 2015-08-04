
 function Storage2() {
  this._ListOfData = {}; //в нем таблицы сущностей // внутри свойства: имя - id, а под ними data
  this._idCounter = makeId();
};

Storage2.prototype.addData = function(Data) {
  var id = this._idCounter();
  this._ListOfData[id] = Data;
  return id;
}

Storage2.prototype.getData = function(id) {
  return this._ListOfData[id];
}

Storage2.prototype.updateData = function(id, data) {
  this._ListOfData[id] = data;
  return this._ListOfData[id];
}

Storage2.prototype.deleteData = function(id) {
  delete this._ListOfData[id];
  return this._ListOfData[id];
}

Storage2.prototype.deleteDataFantomly = function(id) {//добавляем элементу свойство удалено, но не удаляем, лишь помечаем
    //что делать если правда удаляем? отдельный метод для смены id у следующих и уменьшение счетчика id
    //но пока просто помечаем
  if ( id in this._ListOfData) {
    this._ListOfData[String(id)].deleted = true;
  }

  return this._ListOfData[String(id)]; //такого оъекта нет
}
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








