
const { expect } = require('chai');
const fs = require('fs');
const util = require('util');
let writeFile = util.promisify(fs.writeFile);
let deleteFile = util.promisify(fs.unlink);

const [
    Echo,
    Invert,
    Flatten,
    Sum,
    Multiply
  ] = require("../matrixManipulation.js");

const createFile = async (inputFilePath, content) => {
    try {
        await writeFile(inputFilePath, content)
    } catch (err) {
        console.error(err)
    }
} 

describe('Matrix Manipulation', () => {
    let path;
    beforeEach( () => {
        path = '../test.csv';
    });

    after(() => {
    })

    it('Echo Data in this matrix is Not a number', async() => {
        data = '100,1,0\n4x,5,4\n8,9, 10';
        await createFile(path, data);
        let result = await Echo(path); 
        expect(result).to.be.eq("Data in this matrix is Not a number");
    });

    it('Echo This is NOT a matrix', async() => {
        data = '1,2,3\n5,6,7,8\n9,9,9,9';
        await createFile(path, data);
        let result = await Echo(path); 
        expect(result).to.be.eq("This is NOT a matrix");
    });

    it('Echo The number of rows are equal to the number of columns in this matrix', async() => {
        data = '1,2,3,4\n5,6,7,8\n9,9,9,9';
        await createFile(path, data);
        let result = await Echo(path); 
        expect(result).to.be.eq("The number of rows are equal to the number of columns in this matrix");
    });

    it('Echo can trim the data in this matrix', async() => {
        data = '1,2,  3 \n5,6, 7\n9,  9,9';
        await createFile(path, data);
        let result = await Echo(path); 
        expect(result).to.be.deep.eq([[1,2,3],[5,6,7],[9,9,9]]);
    });

    it('Echo the matrix', async() => {
        data = '1,2,3\n5,6,7\n9,9,9';
        await createFile(path, data);
        let result = await Echo(path); 
        expect(result).to.be.deep.eq([[1,2,3],[5,6,7],[9,9,9]]);
    });

    it('Invert', async() => {
        data = '1,2,3\n4,5,6\n7,8,9';
        await createFile(path, data);
        let result = await Invert(path);
        expect(result).to.be.deep.eq([[1,4,7],[2,5,8],[3,6,9]]);
    });

    it('Flatten', async() => {
        data = '1,2,3\n4,5,6\n7,8,9';
        await createFile(path, data);
        let result = await Flatten(path);
        expect(result).to.be.deep.eq([1,2,3,4,5,6,7,8,9]);
    });

    it('Sum', async() => {
        data = '1,2,3\n4,5,6\n7,8,9';
        await createFile(path, data);
        let result = await Sum(path);
        expect(result).to.be.eq(45);
    });

    it('Multiply', async() => {
        data = '1,2,3\n4,5,6\n7,8,9';
        await createFile(path, data);
        let result = await Multiply(path);
        expect(result).to.be.eq(362880);
    });
});