const { Schema, model } = require("mongoose");



const SchemaUser = new Schema({
    name : {
        type : String,
        require : true
    },

    lastname : {
        type : String,
        require : true
    },
    
    age : {
        type : String,
        require : true
    }
})



const ModelUser = model("users", SchemaUser)


module.exports = {
    ModelUser
}