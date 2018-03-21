var MutualAuth = require("nativescript-mutual-auth").MutualAuth;
var mutualAuth = new MutualAuth();

describe("greet function", function() {
    it("exists", function() {
        expect(mutualAuth.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(mutualAuth.greet()).toEqual("Hello, NS");
    });
});