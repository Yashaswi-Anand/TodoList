// import data from mongodb
const db = require('../config/mongoose');
// import database model
const todoTask = require('../models/todo_list_model');

// Different colors for different categories
let categoriesColors = {
    personal : 'darkgreen',
    work : 'darkmagenta',
    school : 'darkorange',
    cleaning : 'darkblue',
    other : 'darkcyan',
    'na' : 'grey',
}

// controller function for route '/'
module.exports.task = function(req, res){
    todoTask.find({}, function(err, todoList){
        if(err){
            console.log('Error in fetching tasks from db');
            return;
        }
        return res.render('home',{
            title:"TODO APP",
            todoList: todoList,
            colors: categoriesColors,
        });
    });
}


// Action on todo list app like create new task, delete task, update task

// Create new task and save it to database
module.exports.create = function(req, res){
    // To create new task and store in database
    todoTask.create({
        discription: req.body.discription == '' ? 'No discription' : req.body.discription,
        category: req.body.category == '' ? '' : req.body.category, 
        due_date: req.body.due_date == '' ? 'No deadline' : req.body.due_date,
    }, function(err, newTodo){
        if(err){
            console.log('Error in creating a todo');
            return;
        }
        console.log('******', newTodo);
        return res.redirect('back');
    });
}

// Delete button is clicked  after checking the checkbox than delete the task from db.
module.exports.delete = function(req, res){
    
    var id = req.body.id;
    console.log(id);

    // If user haven't selected any task to delete
    if(id == undefined){
        console.log("User haven't selected any task to delete");
        return res.redirect('back');
    }
    // If only one task is to be deleted
    else if(typeof(id) == 'string'){
        todoTask.findByIdAndDelete(id.toString().trim(), function(err){
                if(err){
                    console.log("error deleting task ");
                    return;
                }
                return res.redirect('back');
            });
    }
    // If multiple tasks are to be deleted
    else{
        for(let i of id){
            todoTask.findByIdAndDelete(i.toString().trim(), function(err){
                if(err){
                    console.log("error deleting tasks ");
                    return;
                }
            });
        }
        return res.redirect('back');
    }
};