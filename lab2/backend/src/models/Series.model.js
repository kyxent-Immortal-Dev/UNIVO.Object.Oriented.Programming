const { Schema, Types, model } = require("mongoose");

const SchemaSeries = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: Types.ObjectId,
        ref: "categories",
        required: true
    },
    clasificacion: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'R', 'NC-17'],
        default: 'PG-13'
    },
    formato: {
        type: String,
        enum: ['DVD', 'Blu-ray', 'Digital', '4K', 'VHS'],
        default: 'Digital'
    },
    duracion: {
        type: Number, 
        min: 1
    },
    fecha_ingreso: {
        type: Date,
        default: Date.now
    }
});

const ModelSeries = model("series", SchemaSeries);

module.exports = {
    ModelSeries
}