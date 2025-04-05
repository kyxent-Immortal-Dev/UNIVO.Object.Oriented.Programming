const express = require("express")
const TaskControllerService = require("../controllers/tasks.controller.service")


class TaskRouter {



    initTasksRoutes(){
        
        const TaskService = new TaskControllerService()

        const app = express.Router()

        app.post("/tasks", TaskService.create)

        app.get("/tasks/:_id", TaskService.getById)

        app.get("/tasks", TaskService.getAll)

        app.put("/tasks/:_id", TaskService.update)

        app.delete("/tasks/:_id", TaskService.delete)

        return app
    }

}


module.exports = TaskRouter