function BaseRepository() {
};

BaseRepository.prototype.save = function (entity){
    var id = this.storage.addData(entity["attrs"]);
    entity.giveId(id);
    return entity;
}

BaseRepository.prototype.getById = function (id){ //смысл вытаскивать сущность по сущности??? все же по id отдельно может понадобится
    return this.storage.getData(id);
}

BaseRepository.prototype.update = function (entity){
    this.storage.updateData(entity.getId(),entity["attrs"]);
}

// BaseRepository.prototype.delete = function (entity){
//     return this.storage.deleteDataFantomly(entity);
// }

BaseRepository.prototype.delete = function (entity){
    alert(entity.getId());
    this.storage.deleteData(entity.getId());
}

BaseRepository.prototype.search = function (key, value){
    var arr = this.storage.search(key, value);
    return arr;
}

BaseRepository.prototype.loadAllData = function (){
    //возвращает чисто данные, без методов. где создаются именно entity? в скрипте? выше?
    var arr = this.storage.getAll();
    return arr;
}

module.exports = BaseRepository;



