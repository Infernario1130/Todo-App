const {z} = require("zod");

const createTodo = z.object({
    id: z.string().min(1,"ID is required."),
    title: z.string().min(5,"Title is required"),
    description: z.string().min(10,"Description is required.")
});

const updateTodo = z.object({
    id: z.string().min(1,"ID is required.")
})

module.exports ={
    createTodo: createTodo,
    updateTodo: updateTodo
}