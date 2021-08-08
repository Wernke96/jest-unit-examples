const User = require('../app/User');

const math = require('../app/add');
math.add = jest.fn();
describe("example test", function () { 
    
    test('User Test', function () {
        let user = new User("jerred","Payne!7667");
        expect(user).toBeInstanceOf(User);
    });
    test("test getUser", () => {
        let user = new User("jerred","Payne!7667");
        expect(user.getUser()).toBe("jerred");
    });
    test("add user",  async () => {
        let user = new User("jerred","Payne!7667");
        math.add.mockReturnValue(3);
        expect(await user.add()).toBe(3);
        expect(math.add).toHaveBeenCalledWith(1,2);
    });
});