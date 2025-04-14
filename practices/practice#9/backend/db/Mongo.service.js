const { connect } = require("mongoose");
const { Enviroments } = require("../plugins/Enviroments.adapter");



class MongoService {

    constructor(uri= Enviroments.MONGO_URI){
        this.uri = uri
    }

    async initConnection(){

        try {
          
            await connect(this.uri)
            console.log('connect to mongodb successfully');
            
            
        } catch (error) {
            throw new Error(`${error}`);
            
        }

    }

}

module.exports = {
    MongoService
}