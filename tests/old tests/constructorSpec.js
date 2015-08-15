// function A() {
//     this.a = "123";
// };
// A.prototype.f = function() {

// };


// var obj1 = new A();

// function construct(constructor) {
//     var res = Object.create(null);
//     res.constructor = constructor;
//     return res;
// };
// var obj2 = construct(A);

// describe("Constructor", function() {
//     it("obj1 should be an object", function() {
//         expect(typeof obj1).toBe("object");
//     });

//     it("obj2 should be an object", function() {
//         expect(typeof obj2).toBe("object");
//     });

//     it("obj1 should have A constructor", function() {
//         expect(obj1.constructor).toBe(A);
//     });

//     it("obj2 should have A constructor", function() {
//         expect(obj2.constructor).toBe(A);
//     });

//     it("obj1 should have a property", function() {
//         expect(obj1.a).toBe("123");
//     });

//     it("obj2 should have a property", function() {
//         expect(obj2.a).toBe("123");
//     });

//     it("obj1 should have f function", function() {
//         expect(obj1.f).toBeDefined();
//     });

//     it("obj2 should have f function", function() {
//         expect(obj2.f).toBeDefined();
//     });
// });