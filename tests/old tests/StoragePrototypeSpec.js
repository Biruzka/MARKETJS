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
        var data = {name: "Уюттера"}
        var id = storage.addData(data);
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
        var res = storage.addData(data);
        var id = res._id;
        storage.deleteDataFantomly(id);
        expect(storage.getData(id)).toEqual(undefined);
    });

    it('delete data by id', function () { //по id удаляет запись (data) - возвращает true, если все верно
        var storage = new Storage2();
        var data = {name: "Уюттера"};
        var res = storage.addData(data);
        var id = res._id;
        storage.deleteData(id);
        expect(storage.getData(id)).toBe(undefined);

    });

    it('search key/value', function () {
        var storage = new Storage2();
        var data = {name: "Уюттера"};
        storage.addData(data);
        var arr = storage.search('name','Уюттера');
        console.log(arr + " массив");
        expect(arr[0]).toEqual({name: "Уюттера"});

    });

});

