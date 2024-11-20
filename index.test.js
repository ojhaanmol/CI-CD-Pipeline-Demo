const {describe, test, expect} = require("@jest/globals");

const someFunction = (flag) => {
    if(typeof flag !== 'boolean') return 0
    return flag ? 1 : -1
}

describe("This is a unit test:",()=>{
    test("this is a negtive test, and is expecting 0",()=>{
        expect(someFunction()).toBe(0);
    });

    test("this is a negtive test, and is expecting -1",()=>{
        expect(someFunction(false)).toBe(-1);
    });

    test("this is a positive test, and is expecting 1",()=>{
        expect(someFunction(true)).toBe(1);
    })
})