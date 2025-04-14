const { connect } = require("mongoose");
const { Enviroments } = require("../plugins/Enviroments.service");




class MongoService {

    constructor(

        uri = Enviroments.MONGO_URI

    ){
        this.uri = uri
    }

    async initConnection(){

        try {
            
            await connect(this.uri, {
                dbName : 'movies'
            })

            console.log("connection successfully 200 OK");
            

        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }

}

module.exports = {
    MongoService
}