
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
  //var deleted = this._ListOfData[id] && this._ListOfData[id]["deleted"];
  return this._ListOfData[id];
}

Storage2.prototype.getAll = function() {
  var arr = new Array();
  var item;

  for (item in this._ListOfData) {
      arr.push(this._ListOfData[item]);                 //возвращает массив с объектами
    }

  return arr;
}
//штука, которая позволит доставать объекты с определенными свойствами

Storage2.prototype.search = function(key, value) {
  //парсим наш лист
  var arr = new Array();
  var item;

  for (item in this._ListOfData){

    if (this._ListOfData.hasOwnProperty(item)){

      if (this._ListOfData[item][key] === value) {
        arr.push(this._ListOfData[item]);

      }                //возвращает массив с объектами
    }
  }

    // if (this._ListOfData[item][key] === value) {
    //   arr.push(item);}                                    //возвращает массив id-шников

    // }
  return arr;
}

Storage2.prototype.updateData = function(id, data) {
  this._ListOfData[id] = data;
}

Storage2.prototype.deleteData = function(id) {
  delete this._ListOfData[id];
}

// Storage2.prototype.deleteDataFantomly = function(data) {//добавляем элементу свойство удалено, но не удаляем, лишь помечаем
//     //что делать если правда удаляем? отдельный метод для смены id у следующих и уменьшение счетчика id
//     //но пока просто помечаем
//   if ( data.getId() in this._ListOfData) {
//     this._ListOfData[data.getId()].set("deleted", true);
//   }
// }








