const express  = require('express');
const { join } = require('path');
const port = 8000;
const app = express();

// add static files like css, javascript
app.use(express.static('assets'));

// add the view engine
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// list of todo list
const todoList = [
    {
        discription: 'Learn Node.js',
        category: 'Node.js',
        due_date: '2020-01-01',
    },
    {
        discription: 'Learn express.js',
        category: 'Node.js',
        due_date: '2020-21-01',
    },
    
]

// add get route
app.get('/', (req, res) => {
    res.render('home',{
        title:"TODO APP",
        todoList: todoList,
    });
});
// url encoded data
app.use(express.urlencoded());
// post method
app.post('/todo-_list',function(req,res){
    console.log(req.body);
    todoList.push(req.body);
    // todoList.push({
    //     discription: req.body.discription,
    //     category: req.body.category,
    //     due_date: req.body.due_date,
    // });
    return res.redirect('/');
});


// listen to the port
app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is listening on port ${port}`);
});