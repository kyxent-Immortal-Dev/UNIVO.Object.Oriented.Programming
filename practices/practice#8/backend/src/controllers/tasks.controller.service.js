const ModelTasks = require("../models/tasks.model");

class TaskControllerService {



    async create(req, res){

        const {title , description, isCompleted} = req.body

        try {

            if(!title, !description, !isCompleted){
                return res.status(400),json({
                    msj : "bad request , please send title , description and isCompleted"
                })
            }

            const task = await ModelTasks.create({title , description, isCompleted})

            return res.status(201).json({
                msj : "tasks created successfully!!",
                status : "200 OK",
                data : task
            })

        } catch (error) {
            res.status(500).json({
                msj :"error to add task"
            })
            
        }
    }

    async getById(req, res){

        const _id = req.params

        try {
        
            const task = await ModelTasks.findById(_id)

            return res.status(200).json({
                msj :"tasks get successfully 200 OK",
                data : task
            })

        } catch (error) {
            res.status(500).json({
                msj :"error to get task"
            })
            
        }

    }

    async getAll(req, res){


        try {

            const tasks = await ModelTasks.find()

            return res.status(200).json({
                msj :"tasks get successfully 200 OK",
                data : tasks
            })
            
            
        } catch (error) {
            res.status(500).json({
                msj :"error to get tasks"
            })
        }

    }

    async update(req, res){

        const _id = req.params
        const {title, description, isCompleted} = req.body

        try {

            const task = await ModelTasks.findByIdAndUpdate(_id, {title, description, isCompleted}, {new:true})

            return res.status(200).json({
                msj :"tasks update successfully 200 OK",
                data : task
            })
            
        } catch (error) {
            return res.status(500).json({
                msj :"Problem at update task"
            })
        }

    }

    async delete(req, res){

        const _id = req.params

        try {

            const task = await ModelTasks.findByIdAndDelete(_id)

            return res.status(200).json({
                msj : "task deleted",
                data : task
            })
            
        } catch (error) {
            
            return res.status(500).json({
                msj :"Problem at delete task"
            })
        }

    }

}

module.exports = TaskControllerService