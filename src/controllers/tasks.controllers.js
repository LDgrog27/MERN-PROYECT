import Task from "../models/task.model.js"


export const getTasks = async (req, res) => {
    const task = await Task.find()
    res.json(task)
}

export const createTask = async (req, res) => {
    const { title, description, date } = req.body
    const newTask = new Task({
        title,
        description,
        date
    })
   const saveTask = await newTask.save()
}

export const getTask = async (req, res) => {

}

export const updateTask = async (req, res) => {

}

export const deleteTask = async (req, res) => {

}
