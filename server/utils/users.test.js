const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 1,
            name: 'Mike',
            room: 'Test'
        }, {
            id: 2,
            name: 'Nappel',
            room: 'Test 2'
        }, {
            id: 3,
            name: 'Rudi',
            room: 'Test'
        }];
    });

    it('should remove a user', () => {
        const userId = 1;
        const user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should remove not a user', () => {
        const userId = 5;
        const user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        const userId = 1;
        const user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        const userId = 4;
        const user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should add a new user', () => {
        const users = new Users();
        const user = {
            id: '123',
            name: 'Hugo',
            room: 'Dark room'
        };

        const resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should returns names for test room', () => {
        const userList = users.getUserList('Test');

        expect(userList).toEqual(['Mike', 'Rudi']);
    });

    it('should returns names for test 2 room', () => {
        const userList = users.getUserList('Test 2');

        expect(userList).toEqual(['Nappel']);
    });
});
