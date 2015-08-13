function BaseRepository() {
    this.storage = new Storage2();
};

BaseRepository.prototype.save = function (entity){
    var id = this.storage.addData(entity);
    entity.giveId(id);
    return entity;
}

BaseRepository.prototype.getById = function (id){ //смысл вытаскивать сущность по сущности??? все же по id отдельно может понадобится
    return this.storage.getData(id);
}

BaseRepository.prototype.update = function (entity){
    this.storage.updateData(entity);
}

BaseRepository.prototype.delete = function (entity){
    return this.storage.deleteDataFantomly(entity);
}
//прям конкретное удалить, таки безвозвратно
BaseRepository.prototype.destroy = function (id){
    return this.storage.deleteData(id);
}

BaseRepository.prototype.search = function (key, value){
    var arr = this.storage.search(key, value);
    return arr;
}

BaseRepository.prototype.showAll = function (){
    var arr = this.storage.getAll();
    return arr;
}

