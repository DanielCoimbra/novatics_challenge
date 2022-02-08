const assert = require('assert');
const f = require('../src/list_manipulation');

list_ok=[1,2,3,4,5];
list_only_1s=[1,1,1,1,1];
list_doubled=[1,1,2,2,3,3,4,4,5,5];
list_empty=[];

describe('List Manipulation Test', () => {
    it('Should return the same list', () => {
        assert.equal(f.remove_duplicate(list_ok), [1,2,3,4,5]);
    });
    it('Should return a list with a single item', () => {
        assert.equal(f.remove_duplicate(list_only_1s), [1]);
    });
    it('Should return the list without the duplicates', () => {
        assert.equal(f.remove_duplicate(list_doubled), [1,2,3,4,5]);
    });
    it('Should return an empty list', () => {
        assert.equal(f.remove_duplicate(list_empty), []);
        });
});

