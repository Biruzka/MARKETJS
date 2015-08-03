describe("InMemoryStorage", function () {

    it('should create storage', function () {
        var storage = InMemoryStorage.createStorage();
        expect(typeof storage).toEqual("object");
    });

    it('should add data to storage', function () { //добавляет Data возвращает просто id???
        var storage = InMemoryStorage.createStorage();
        var data = {name: "Уюттера"}
        expect(storage.addData(data)).toEqual(1);
    });

    it('should get data by id', function () { //возвращает data
        var storage = InMemoryStorage.createStorage();
        var id = 1;
        var data = {name: "Уюттера"}
        storage.addData(data);
        expect(typeof storage.getData(id)).toEqual("object");
    });

    it('update data by id on new data', function () { //по id и data заменяет data - возвращает true, если все верно
        var storage = InMemoryStorage.createStorage();
        var data = {name: "Уюттера"}
        storage.addData(data);
        var id = 1;
        var data = {name: "СпортМастер"}
        expect(storage.updateData(id, data)).toEqual(true);
    });

    it('delete data by id', function () { //по id удаляет запись (data) - возвращает true, если все верно
        var storage = InMemoryStorage.createStorage();
        var id = 1;
        expect(storage.deleteDataInSt(id)).toEqual(true);
        expect(deleted in storage.getData[id]).toEqual(true);
    });
    //как проверяют getNewID
});