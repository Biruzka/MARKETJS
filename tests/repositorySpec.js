describe("Repository", function () {

    it('should create storage', function () {
        var storage = new Storage();
        expect(typeof storage).toEqual("object");
    });

});