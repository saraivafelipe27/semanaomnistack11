const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique Id', () => {
    it('shoud generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
});