
const { expect } = require('chai');
const fs = require('fs');
const csv = require('csv-parser');

const [
    Echo,
    Invert,
    Flatten,
    Sum,
    Multiply
  ] = require("../matrixManipulation.js");

describe('Matrix Manipulation', () => {
    let path;
    beforeEach(function () {
        path = '../matrix.csv';
        // write in matrix.csv a matrix that the number of rows are equal to the number of columns
        // let array = [1,2,3,4,5,6,7,8,9];
    });

    after(() => {
    })

    it('Echo', () => {
        // the number of rows are equal to the number of columns in matrix.csv
        let result = Echo(path); 
        expect(result).to.be.deep.eq([[ '1', '2', '3' ], [ '4', '5', '6' ], [ '7', '8', '9' ]]);

        // rewirte this file so that the number of rows are NOT equal to the number of columns in matrix.csv
        // expect(Echo(path)).to.be.eq('The number of rows are NOT equal to the number of columns in matrix.csv');

    });

    it('Invert', () => {
        expect(Invert(path)).to.be.deep.eq([[1,4,7],[2,5,8],[3,6,9]]);
    });

    it('Flatten', () => {
        expect(Flatten(path)).to.be.deep.eq([1,2,3,4,5,6,7,8,9]);
    });

    it('Sum', () => {
        expect(Sum(path)).to.be.eq(45);
    });

    it('Multiply', () => {
        expect(Multiply(path)).to.be.eq(362880);
    });
});