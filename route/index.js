// import express from 'express';
const express = require('express');

// Setup router
const router = express.Router();

// Setting path for controller function
const todoTaskController = require('../controller/todoTaskController');

console.log('router is running');

// Setting controller function to a route
router.get('/', todoTaskController.task);

// Middleware to decode data coming from browser
router.use(express.urlencoded({ extended: true }));

// handle the requests coming to /create-task and execute create function from todoTaskController.js
router.post('/create-task', todoTaskController.create);

// handle the requests coming to /delete-tasks and execute delete function from todoTaskController.js
router.post('/delete-task', todoTaskController.delete);

// Exporting router
module.exports = router;