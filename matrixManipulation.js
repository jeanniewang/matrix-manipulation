const fs = require('fs');
const util = require('util');
let readFile = util.promisify(fs.readFile);

const Echo =  async (inputFilePath) => {
    try {
        let buffer =  await readFile(inputFilePath, 'utf8');
        let data = buffer.split('\n');
        let arrays = new Array();

        // Trim all element and check if all element are integer
        // Then push each line into arrays
        for (const e of data) {
            let arr = e.split(',');
            arr.forEach((e, i) => arr[i] = e.trim());
            if (arr.some((e) => isNaN(e))) {
                return Error("This matrix contains element that is not a number");
            }
            arrays.push(arr);
        }

        // If all array in arrays has the same number of element; if so, return the value, or return error
        let lenOfEachArr = arrays.map((arr) => arr.length);
        if (!(lenOfEachArr.every((val, i, arr) => val === arr[0]))) {
            return Error("This is NOT a matrix");
        }
        if (lenOfEachArr[0] != arrays.length) {
            return Error("The number of rows are NOT equal to the number of columns in this matrix");
        }

        // convert all element back to number
        for (const arr of arrays) {
            arr.forEach((e, i) => arr[i] = Number(arr[i]));
        }

        return arrays;
    } catch (err) {
        if (err.code === 'ENOENT') {
            return Error("File not found")
          } else {
            throw err;
          }
    }
    
};


const Invert = async(inputFilePath) => {
    let arrays = await Echo(inputFilePath);
    let invertArrays = [];
    let colNum = arrays[0].length;
    for (let i = 0; i < colNum; i ++) {
        let invertArr = [];
        for (const arr of arrays) {
            invertArr.push(arr[i]);
        }
        invertArrays.push(invertArr);
    }
    return invertArrays;
}


const Flatten = async(inputFilePath) => {
    let arrays = await Echo(inputFilePath);
    let flattenArr = [];
    for (const arr of arrays) {
        flattenArr = flattenArr.concat(arr);
    }
    return flattenArr;
}


const Sum = async(inputFilePath) => {
    let arrays = await Echo(inputFilePath);
    let reducer = (preVal, curVal) => preVal + curVal;
    let oneDimArray = [];
    for (const arr of arrays) {
        oneDimArray.push(arr.reduce(reducer, 0));
    }
    let sum = oneDimArray.reduce(reducer, 0);
    return sum;
}


const Multiply = async(inputFilePath) => {
    let arrays = await Echo(inputFilePath);
    let reducer = (preVal, curVal) => preVal * curVal;
    let oneDimArray = [];
    for (const arr of arrays) {
        oneDimArray.push(arr.reduce(reducer, 1));
    }
    let multiplication = oneDimArray.reduce(reducer, 1);
    return multiplication;
}

module.exports = {
    Echo, 
    Invert, 
    Flatten, 
    Sum, 
    Multiply
};