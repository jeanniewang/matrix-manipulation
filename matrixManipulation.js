const fs = require('fs');
// const util = require('util')

// let readFile = util.promisify(fs.readFile);
let path = './matrix.csv';

const Echo = (inputFilePath) => {
    let data = fs.readFileSync(inputFilePath);
    let arrays = new Array();
    let arr = data.toString().split("\n");
    for(const e of arr) {
        let splited = e.split(',');
        let splitedToNum = splited.map((e) => Number(e))
        arrays.push(splitedToNum);
    }
    return arrays;
}


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
    // Need to test if out put are number
    // console.log(typeof invertArrays[0][0])
    return invertArrays;
}

// (async() => {
//     let result = await Invert(path);
//     console.log(result)
// })();

const Flatten = async(inputFilePath) => {
    let arrays = await Echo(inputFilePath);
    let flattenArr = [];
    for (const arr of arrays) {
        flattenArr = flattenArr.concat(arr);
    }
    return flattenArr;
}

// (async() => {
//     let result = await Flatten(path);
//     console.log(result)
// })();

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

// (async() => {
//     let result = await Sum(path);
//     console.log(result)
// })();

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

(async() => {
    let result = await Multiply(path);
    console.log(result)
})();

module.exports = [Echo, Invert, Flatten, Sum, Multiply];
