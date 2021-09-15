const chai =  require("chai");
const letterCount = require("./letterCount"); 

describe('getLetterCount - basic functionality', () => {
    it('returns an empty object when passed an empty string', () => {
        const expected = {};
        const actual = letterCount.getLetterCount('');
        chai.expect(actual).to.deep.equal(expected);
    })
    it('returns a letter count of 1 when passed a string of size 1', () => {
        const expected = {a:1};
        const actual = letterCount.getLetterCount('a');
        chai.expect(actual).to.deep.equal(expected);
    })

    it('returns a letter count for words with more than one of the same letter', () => {
        const expected = {b:1,a:3,n:2};
        const actual = letterCount.getLetterCount("banana");
        chai.expect(actual).to.deep.equal(expected);
    })

    it('returns an error if anything other than a string is passed to it', () => {
        const actual = letterCount.getLetterCount(0);
        chai.expect(actual).to.be.an("error");
    })
})