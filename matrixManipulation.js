const fs = require('fs');
const csv = require('csv-parser');
const util = require('util')

let readFile = util.promisify(fs.readFile);
let path = './matrix.csv';
const Echo = async(inputFilePath) => {
    try {
        let data = await readFile(inputFilePath);
        let arrays = new Array();
        let arr = data.toString().split("\n");
        for(const e of arr) {
            let splited = e.split(',');
            arrays.push(splited);
        }
        return arrays;
    } catch (err) {
    }
}

(async() => {
    let result = await Echo(path);
})();




const Invert = (path) => {}

const Flatten = (path) => {}

const Sum = (path) => {}

const Multiply = (path) => {}

module.exports = [Echo, Invert, Flatten, Sum, Multiply];

// const Echo = async (inputFilePath) => {
//     let arrays = [];
//     fs.createReadStream(inputFilePath)
//         .pipe(csv({headers: false}))
//         .on('data', (data) => {
//             try {
//                 let arr = [];
//                 for (let i = 0; i < Object.keys(data).length; i ++) {
//                     arr.push(data[i]);
//                 }
//                 arrays.push(arr);
//             }
//             catch(err) {
//                 //error handler
//             }
//         })
//         .on('end', () => {
//             arrays.forEach((arr) => console.log(...arr));
//             console.log(arrays)
//             return arrays;
//         });
// }