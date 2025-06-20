const express = require("express");
const cors = require("cors")
const app = express();
const {Todo} = require("./db");
const {createTodo,updateTodo} = require("./rules")

app.use(cors());
app.use(express.json());

app.post("/todo", async function(req,res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
       return res.status(400).json({
            error: "Wrong inputs are sent."
        })
    } 
    try { await Todo.create({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,  
        completed: false
        })
        res.json({
            msg: "Todo created successfully."
        })
    } 
    catch(error) { res.status(500).json({
        error: "Internal server error."
        })
    }
})

app.get("/todo", async function(req,res) {
    try { const response = await Todo.find({
         })
        res.json({
            Todo: response
        })
    } catch(error) {
        res.status(500).json({
            error: "Internal server error."
        })
    }
})

app.put("/completed", async function(req,res) {
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload)
    if(!parsedPayload.success) {
        return res.status(400).json({
            msg: "Wrong inputs are given."
        })
    }

    try { await Todo.updateOne({
       id: parsedPayload.data.id
    }, {
        $set: {completed: true}
    })
        res.json({
            msg: "Todo completed successfully."
        })
    } catch(error) {
        res.status(500).json({
            error: "Internal server error."
        })
    }
})

app.listen(3000,function(req,res){
    console.log("Server is running on port 3000.")
});
