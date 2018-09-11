"use strict";
var expect = require("chai").expect;
var assert = require("chai").assert;
import stringInject from '../lib/index';

describe("replace brackets with array items", function() {
    it("should replace brackets {0} in string with array[0]", function() {
        var str = stringInject("My username is {0}", ["tjcafferkey"]);
        expect(str).to.equal("My username is tjcafferkey");
    });

    it("should replace brackets {0} and {1} in string with array[0] and array[1]", function() {
        var str = stringInject("I am {0} the {1} function", ["testing", "stringInject"]);
        expect(str).to.equal("I am testing the stringInject function");
    });
});

describe("pass in a string with no {} with an array of items", function() {
    it("should return the same string as passed in", function() {
        var str = stringInject("This should be the same", ["testing", "stringInject"]);
        expect(str).to.equal("This should be the same");
    });
});

describe("replace object values based on their keys", function() {
    it("replace object values based on one key", function() {
        var str = stringInject("My username is {username}", { username: "tjcafferkey" });
        expect(str).to.equal("My username is tjcafferkey");
    });

    it("replace object values based on two keys", function() {
        var str = stringInject("My username is {username} on {platform}", { username: "tjcafferkey", platform: "GitHub" });
        expect(str).to.equal("My username is tjcafferkey on GitHub");
    });

    it("replace object values based on two keys in reverse order", function() {
        var str = stringInject("My username is {platform} on {username}", { username: "tjcafferkey", platform: "GitHub" });
        expect(str).to.equal("My username is GitHub on tjcafferkey");
    });

    it("if the key does not exist in the object it will not replace it in the string", function() {
        var str = stringInject("My username is {platform} on {username}", { username: "tjcafferkey" });
        expect(str).to.equal("My username is {platform} on tjcafferkey");
    });

    it("if the object has no keys then it will return the string", function() {
        var str = stringInject("My username is {platform} on {username}", {});
        expect(str).to.equal("My username is {platform} on {username}");
    });
});

describe("pass in incorrect parameters", function() {
    it("should return false when passed a number instead of a string as first parameter", function() {
        var str = stringInject(100, ["testing", "stringInject"]);
        expect(str).to.be.false;
    });

    it("should return false when passed a number instead of an array as second parameter", function() {
        var str = stringInject("hello", 1);
        expect(str).to.equal("hello");
    });

    it("if the data param is false bool", function() {
        var str = stringInject("My username is {platform} on {username}", false);
        expect(str).to.equal("My username is {platform} on {username}");
    });

    it("if the data param is true bool", function() {
        var str = stringInject("My username is {platform} on {username}", true);
        expect(str).to.equal("My username is {platform} on {username}");
    });

    it("if the data param is a string", function() {
        var str = stringInject("My username is {platform} on {username}", "string");
        expect(str).to.equal("My username is {platform} on {username}");
    });
});