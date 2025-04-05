const express = require("express");
const Enviroments = require("./utils/Enviroments");
const MongoService = require("./database/mongo.service");
const TaskRouter = require("./routes/tasks.routes");

class Server {

    constructor(
        server = express()
    ){
        this.server = server
    }

    initServer(){

        const mongodb = new MongoService()

        mongodb.initConnection()

        this.server.use(express.json())
        this.server.use(express.urlencoded())

        const taskRouter = new TaskRouter()
        this.server.use("/api", taskRouter.initTasksRoutes())

        this.server.listen(Enviroments.PORT, () => {
            console.log(`server running in http://localhost:${Enviroments.PORT}`);
            
        })
    }

}


const server = new Server()

server.initServer()