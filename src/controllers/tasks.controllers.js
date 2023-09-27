import Task from "../models/task.model.js"


export const getTasks = async (req, res) => {
    const task = await Task.find({
        user: req.user.id // trae todas las tareas solo del usuario autenticado
    }).populate("user") // populate trae todos los datos del usuario que creo la tarea
    res.json(task)
}

export const createTask = async (req, res) => {
    const { title, description, date } = req.body
   
    const newTask = new Task({ //creo el dato que voy a guardar
        title,
        description,
        date,
        user: req.user.id // req.user.id es el id que se obtiene del token en authRequired, que contiene dentro de el user
    })
   const saveTask = await newTask.save() // guardo el dato
   res.json(saveTask)
}

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id).populate("user") // req.params.id es el id que se pasa por la url
    
    if (!task) return res.status(404).json({message: "Task not found"})
    res.json(task)
    
}

export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    
    if (!task) return res.status(404).json({message: "Task not found"})
    
    return res.sendStatus(204)
}

export const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true // para que devuelva el objeto actualizado
    })
    
    if (!task) return res.status(404).json({message: "Task not found"})
    
    res.json(task)
}
