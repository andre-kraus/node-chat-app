const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'From', text = 'Text';
        const newMessage = generateMessage(from, text);

        expect(newMessage).toInclude({from, text});
        expect(newMessage.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location message object', () => {
        const from = 'From', latitude = 1, longitude = 2;
        const expectedUrl = `https://www.google.de/maps?q=${latitude},${longitude}`;
        const locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage).toInclude({from, url: expectedUrl});
        expect(newMessage.createdAt).toBeA('number');
    });
});
