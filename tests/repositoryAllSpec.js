 var shop = shopRep.create({name:"MEGA"});
 var product = productRep.create();

describe("Repository", function () {

    it('should create shop', function () {


        expect(typeof shopRep).toEqual("object");
    });

});