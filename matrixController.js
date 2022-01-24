const {
    echo,
    invert,
    flatten,
    sum,
    multiply
} = require("./matrixManipulation.js");

const echoMatrix = async (req, res) => {
    try {
        const inputFilePath = req.query.path;
        const result = await echo(inputFilePath);
        if (result instanceof Error) {
            res.status(400).json({error: result.message});
        } else {
            res.status(200).json({matrix: result});
        }
    } catch(err) {
        res.status(500).json({error: err})
    }
};


const invertMatrix = async (req, res) => {
    try {
        const inputFilePath = req.query.path;
        const result = await invert(inputFilePath);
        res.status(200).json({"Inverted matrix": result});
    } catch(err) {
        res.status(500).json({error: err})
    }
}

const flattenMatrix = async (req, res) => {
    try {
        const inputFilePath = req.query.path;
        const result = await flatten(inputFilePath);
        res.status(200).json({"Flatten matrix": result});
    } catch(err) {
        res.status(500).json({error: err})
    }
}


const sumMatrix = async (req, res) => {
    try {
        const inputFilePath = req.query.path;
        const result = await sum(inputFilePath);
        res.status(200).json({"Sum of this matrix": result});
    } catch(err) {
        res.status(500).json({error: err})
    }
}


const multiplyMatrix = async (req, res) => {
    try {
        const inputFilePath = req.query.path;
        const result = await multiply(inputFilePath);
        res.status(200).json({"Multiplication of this matrix": result});
    } catch(err) {
        res.status(500).json({error: err})
    }
}

module.exports = {
    echoMatrix,
    invertMatrix,
    flattenMatrix,
    sumMatrix,
    multiplyMatrix
};