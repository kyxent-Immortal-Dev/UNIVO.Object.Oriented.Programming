const express = require("express")
const { Enviroments } = require("./plugins/Enviroments")
const {json} = require("express")
const cors = require("cors")
const { MongoService } = require("./db/Mongo.service")
const { AppRouter } = require("./routes/app.routes")

class Server {

    #server = express.application
    #port   = Enviroments.PORT

    constructor(
        server = express.application,
        port   = Enviroments.PORT
    ){
        this.#server = server
        this.#port   = port
    }


    initServer(){

        try {

            const mongodb = new MongoService(Enviroments.MONGO)

            mongodb.initService()

            this.#server.use(json())
            this.#server.use(cors())
            this.#server.use("/api", AppRouter.initRoutes())

            this.#server.listen(this.#port, () => {
                console.log(`server running in http://localhost:3000`)
                
            })
            
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
}


const server = new Server(express(), Enviroments.PORT)


server.initServer()