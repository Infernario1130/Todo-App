require("dotenv").config();

const mongoose = require("mongoose")
async function databaseConnector() {
    try { await mongoose.connect(process.env.MONGO_URI) 
          console.log("Connection to database is established.")
    } catch(error) {
        console.log(error)
    }
}

databaseConnector()

const todoSchema = new mongoose.Schema({
    title : {
       type: String,
       required: [true,"Title is required."],
       minlength: 5
    },

    description : {
        type: String,
        required: [true,"Description is required."],
        minlength: 10
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model("Todo",todoSchema);

module.exports = {
    Todo: Todo
}
