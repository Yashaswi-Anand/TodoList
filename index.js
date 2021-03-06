const express  = require('express');
const port = 8000;
const app = express();

// add static files like css, javascript
app.use(express.static('assets'));

// add the view engine
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// add the routes
app.use('/', require('./route'));

// listen to the port
app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is listening on port ${port}`);
});