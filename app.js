const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

const {
    echoMatrix, 
    invertMatrix, 
    flattenMatrix, 
    sumMatrix, 
    multiplyMatrix
} = require("./matrixController.js");

app.use(bodyParser.json());

// setup the router
router.get("/echo", echoMatrix);
router.get("/invert", invertMatrix);
router.get("/flatten", flattenMatrix);
router.get("/sum", sumMatrix);
router.get("/multiply", multiplyMatrix);

app.use("", router);

app.listen(8080, () => {
    console.log("The matrix manipulation handler running on port 8080");
});
