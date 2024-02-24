const express = require('express')
const { createToDo } = require('../controllers/taskController')
const router = express.Router()

router.post('/tasks', createToDo)

module.exports = router;