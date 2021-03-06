const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/todo',);

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connection to db'));

// up and running the print the massage
db.once('open', function(){
    console.log('Successfully connected to the database');
});