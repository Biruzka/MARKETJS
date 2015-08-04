describe("Storage2", function () {

    it('should create Storage2', function () {
        var storage = new Storage2();
        expect(typeof storage).toEqual("object");
    });

    it('should add data to Storage2', function () { //добавляет Data возвращает просто id???
        var storage = new Storage2();
        var data = {name: "Уюттера"}
        expect(storage.addData(data)).toEqual(1);
    });

    it('should get data by id', function () { //возвращает data
        var storage = new Storage2();
        var id = 1;
        var data = {name: "Уюттера"}
        storage.addData(data);
        expect(typeof storage.getData(id)).toEqual("object");
    });

    it('update data by id on new data', function () { //по id и data заменяет data - возвращает true, если все верно
        var storage = new Storage2();
        var data = {name: "Уюттера"};
        storage.addData(data);
        var id = 1;
        data = {name: "СпортМастер"};
        expect(typeof storage.updateData(id, data)).toEqual("object");
    });

    it('delete data by id fantomly', function () { //по id удаляет запись (data) - возвращает true, если все верно
        var storage = new Storage2();
        var data = {name: "Уюттера"};
        storage.addData(data);
        var id = 1;
        data = storage.deleteDataFantomly(id);
        expect(data.deleted).toEqual(true);
    });

     it('delete data by id', function () { //по id удаляет запись (data) - возвращает true, если все верно
        var storage = new Storage2();
        var data = {name: "Уюттера"};
        storage.addData(data);
        var id = 1;
        expect(storage.deleteData(id)).toEqual(undefined);
    });

});

