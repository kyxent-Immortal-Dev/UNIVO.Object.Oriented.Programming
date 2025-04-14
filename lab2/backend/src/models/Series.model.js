const { Schema, Types, model } = require("mongoose");


const SchemaSeries = new Schema({

    title : {
        type : String,
        required : true,
        trim : true
    },

    description : {
        type : String,
        required: true,
        trim : true
    },

    year : {
        type : Date,
        required : true
    },

    image : {

        type : String,
        required : true

    },

    category : {
        type : Types.ObjectId,
        ref : "categories",
        required : true
    }


})


const ModelSeries = model("series", SchemaSeries)

module.exports = {
    ModelSeries
}