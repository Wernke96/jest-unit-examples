const app = require("../app/add");

describe("add test", () => {
    test("add 1 + 2", () =>{
        let answer = 3;
        
        expect(app.add(1,2)).toBe(answer);
    })
});
