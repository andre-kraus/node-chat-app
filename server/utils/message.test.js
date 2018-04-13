const expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'From', text = 'Text';
        const newMessage = generateMessage(from, text);

        expect(newMessage).toInclude({from, text});
        expect(newMessage.createdAt).toBeA('number');
    });
});
