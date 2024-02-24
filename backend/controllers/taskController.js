const Task = require('../models/taskSchema')
const { ErrorHandler } = require('../utils/ErrorHandler')
const createToDo = async (req, res) => {
    try {
        const {
            title,
            priority,
            checkLists,
            checkListCount,
            date
        } = req.body

        if (!title || !priority || !checkLists) {
            return ErrorHandler(res, 400, 'Add required Fields!')
        }

        const newTask = new Task({ title, priority, checkLists, checkListCount, date })
        await newTask.save()

        return res.status(201).json({ message: 'Task created!' })
    } catch (error) {
        console.log(error)
        return ErrorHandler(res, 500, 'Internal Serrver Error!')
    }
}

module.exports = { createToDo }