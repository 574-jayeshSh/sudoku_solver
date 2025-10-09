const router = require("express").Router();
const { sudokuSolver } = require("../solver/sudokuSolver");

router.post("/", async(req, res) => {
   try{
    const grid = await req.body.grid;
    
    if(!grid || !Array.isArray(grid) || grid.length != 9){
        return res.status(400).json({
            ok: false,
            error : "Invalid grid format"
        })    
    }
    
    const sudoku = await sudokuSolver(grid);
    if(!sudoku){
        return res.status(400).json({
            ok: false,
            error : "Unsolvable puzzle"
        })
    }

    return res.status(200).json({
        ok: true,
        message: "Sudoku Solved Successful !",
        solution: sudoku
    })
    }catch(err){
        console.error(err);
        return res.status(500).json({
            ok: false,
            error : "Internal server error"
        })
    }
});





module.exports = router;