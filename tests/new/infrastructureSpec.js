describe ("BaseEntity", function () {
    var entity = new BaseEntity({"name":"base"});

    it ('should create Entity', function () {
        expect(typeof entity).toEqual("object");
    });

    it ('should have attr', function () {
        expect(typeof entity.attrs).toEqual("object");
    });

    it ('should get id', function () {
        expect(entity.getId()).toEqual(undefined);
    });

    it ('should give id', function () {
        entity.giveId(2);
        expect(entity.getId()).toEqual(2);
    });

    it ('should get value by key', function () {
        expect(entity.get("name")).toEqual("base");
    });

    it ('should set value by key', function () {
        entity.set("name","base2");
        expect(entity.get("name")).toEqual("base2");
    });
});

describe ("BaseRepository", function () {
    var entity = new BaseEntity({"name":"base"});
    var repository = new BaseRepository();
    repository.save(entity);

    it ('should create repository', function () {
        expect(typeof repository).toEqual("object");
    });

    it ('should save entity to storage and give them id', function () {
        expect(entity.getId()).toEqual(1);
    });

    it ('should geById', function () {
        expect(repository.getById(1)).toEqual(entity["attrs"]);
    });

    it ('should update', function () {
        entity.set("hey","hey");
        repository.update(entity);
        expect(repository.getById(1)["hey"]).toEqual("hey");
    });

    it ('should delete', function () {
        repository.delete(entity);
        expect(repository.getById(1)).toEqual(undefined);
    });

    it ('should search by attribure', function () {
        repository.save(entity);
        var arr = repository.search("name","base");
        expect(arr[0]).toEqual(entity["attrs"]);
    });

    it ('should show all data', function () {
        var entity2 = new BaseEntity({"name":"base"});
        repository.save(entity2);
        var arr = repository.showAll();
        expect(arr[0]).toEqual(entity["attrs"]);
        expect(arr[1]).toEqual(entity2["attrs"]);
        expect(arr[2]).toEqual(undefined);
    });

});