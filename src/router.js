const express = require('express');
const tasksController = require('./controllers/tasksController');

const router = express.Router();

router.get('/tasks',tasksController.getAll);

router.post('/tasks',tasksController.createdTask);

module.exports = router;