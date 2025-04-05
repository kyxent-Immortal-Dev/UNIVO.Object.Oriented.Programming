const { Schema, model } = require("mongoose");

const SchemaTasks = new Schema({
    title : {
        type : String,
        required : ["title is required",true]
    },

    description : {
        type : String,
        required : ["description is required",true]
    },

    isCompleted : {
        type : Boolean,
        required : ["is Completed is required", true]
    }

})

const ModelTasks = model("tasks", SchemaTasks)

module.exports = ModelTasks