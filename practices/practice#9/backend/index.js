const express = require("express")
const cors = require("cors");
const { Enviroments } = require("./plugins/Enviroments.adapter");
const { MongoService } = require("./db/Mongo.service");
const { UserRoutes } = require("./routes/User.routes");


class Server {
    
    constructor(
        server = express(),
        port   = Enviroments.PORT
    ){
        this.server = server,
        this.port   = port
    }

    initServer(){
        try {

            const mongodb = new MongoService()
            
            mongodb.initConnection()
            
            
            this.server.use(cors())

            this.server.use(express.json())

            this.server.use('/api', UserRoutes.initUserRoutes())
            
            this.server.listen(this.port, () => {
                console.log(`server running in http://localhost:${this.port}`);
                
            })

        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }

}


const serverService = new Server();

serverService.initServer()