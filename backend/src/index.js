const express = require("express");
const cors = require("cors");
const solveRoute = require("./route/solveRoute");
const bodyParser = require("body-parser");


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/solve", solveRoute);

app.listen(PORT, () => {
    console.log(`Sudoku backend is running on port ${PORT}`);
})

