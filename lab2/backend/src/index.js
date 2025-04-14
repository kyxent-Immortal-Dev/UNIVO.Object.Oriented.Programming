const express = require("express");
const cors = require("cors");
const { Enviroments } = require("./plugins/Enviroments.service");
const { MongoService } = require("./database/mongo.service");
const { CategoryRoutes } = require("./routes/Category.routes");
const { SeriesRoutes } = require("./routes/Series.routes");

const serverInterface = {

    server : express(),
    port   : Enviroments.PORT

}


class Server {

    constructor(
        server = serverInterface.server,
        port   = serverInterface.port
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
            this.server.use("/api", CategoryRoutes.initRoutes())
            this.server.use("/api", SeriesRoutes.initRoutes())
            
            this.server.listen(this.port, () => {
                console.log(`server running in http://locahost:${this.port}`);
                
            })

        

        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }

}

const server = new Server()

server.initServer()