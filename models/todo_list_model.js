const mongoose = require('mongoose');

// create todo list schema
const todoListSchema = mongoose.Schema({
    discription: {
        type: String,
    },
    category: {
        type: String,
    },
    due_date: {
        type: String,
    }
});

const todoList = mongoose.model('todoList', todoListSchema);

module.exports = todoList;