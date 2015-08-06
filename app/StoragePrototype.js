
 function Storage2() {
  this._ListOfData = {}; //в нем таблицы сущностей // внутри свойства: имя - id, а под ними data
  this._idCounter = makeId();
};

Storage2.prototype.addData = function(data) {
  var data = data;
  var id = this._idCounter();
  this._ListOfData[id] = data;
  return id;
}

Storage2.prototype.getData = function(id) {
  var deleted = this._ListOfData[id] && this._ListOfData[id].deleted;
  if (deleted === undefined)
  return this._ListOfData[id];
}
//штука, которая позволит доставать объекты с определенными свойствами

Storage2.prototype.search = function(key, value) {
  //парсим наш лист
  arr = new Array();
  var item;

  for (item in this._ListOfData){

   // if (this._ListOfData.hasOwnProperty)

    if (this._ListOfData[item][key] === value) {
      arr.push(item);}

    }
  return arr;
}

Storage2.prototype.updateData = function(id, data) {
  this._ListOfData[id] = data;
  return this._ListOfData[id];
}

Storage2.prototype.deleteData = function(id) {
  delete this._ListOfData[id];
}

Storage2.prototype.deleteDataFantomly = function(id) {//добавляем элементу свойство удалено, но не удаляем, лишь помечаем
    //что делать если правда удаляем? отдельный метод для смены id у следующих и уменьшение счетчика id
    //но пока просто помечаем
  if ( id in this._ListOfData) {
    this._ListOfData[id].deleted = true;
  }
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






