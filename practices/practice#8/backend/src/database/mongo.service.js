const {connect} = require("mongoose")
const Enviroments = require("../utils/Enviroments");



class MongoService {

    constructor(
        uri=Enviroments.MONGO_URI
    ){
        this.uri = uri
    }

    async initConnection(){
        try {
            
            await connect(this.uri)
            console.log("connection to mongo successfully");
            
        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }

}


module.exports = MongoService