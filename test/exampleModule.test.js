const example = require('../app/exampleModule');
const math = require('../app/add');

math.add = jest.fn();
describe("example test", function () { 
 test('testing add', function () {
    example.exampleModule();
    math.add.mockReturnValue(4);
    expect(math.add).toHaveBeenCalledWith(2, 2);
    expect(example.exampleModule()).toBe(4)
 });
});