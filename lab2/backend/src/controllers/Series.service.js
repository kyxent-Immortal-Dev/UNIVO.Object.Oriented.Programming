const { Types } = require("mongoose");
const { ModelSeries } = require("../models/Series.model");

class SeriesService {
    
    async create(req, res){
        const {title, description, year, image, category, clasificacion, formato, duracion, fecha_ingreso} = req.body

        try {
            const serie = await ModelSeries.create({
                title, 
                description, 
                year, 
                image, 
                category,
                clasificacion,
                formato,
                duracion,
                fecha_ingreso: fecha_ingreso || new Date()
            });

            res.status(201).json({
                msj: "created successfully 200 OK",
                data: serie
            });
            
        } catch (error) {
            res.status(500).json({
                msj: "server error",
                error: error
            });
            throw new Error(`${error}`);
        }
    }

    async getAllByIdCategory(req, res) {
        const {id} = req.params

        try {
            const series = await ModelSeries.find({ category: id }).populate("category");

            res.status(200).json({
                msj: "get all series by category successfully 200 OK",
                data: series
            });

        } catch (error) {
            res.status(500).json({
                msj: "server error",
                error: error
            });
            throw new Error(`${error}`);
        }
    }

    async getById(req, res) {
        const { id } = req.params;

        try {
            const serie = await ModelSeries.findById(id).populate("category");
            
            if (!serie) {
                return res.status(404).json({
                    msj: "Series not found",
                    data: null
                });
            }

            res.status(200).json({
                msj: "get series by id successfully 200 OK",
                data: serie
            });

        } catch (error) {
            res.status(500).json({
                msj: "server error",
                error: error
            });
            throw new Error(`${error}`);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const updateData = req.body;

        try {
            const updatedSerie = await ModelSeries.findByIdAndUpdate(
                id,
                updateData,
                { new: true, runValidators: true }
            );

            if (!updatedSerie) {
                return res.status(404).json({
                    msj: "Series not found",
                    data: null
                });
            }

            res.status(200).json({
                msj: "updated successfully 200 OK",
                data: updatedSerie
            });

        } catch (error) {
            res.status(500).json({
                msj: "server error",
                error: error
            });
            throw new Error(`${error}`);
        }
    }

    async updateTitle(req, res) {
        const { id } = req.params;
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                msj: "Title is required",
                error: "Missing required field"
            });
        }

        try {
            const updatedSerie = await ModelSeries.findByIdAndUpdate(
                id,
                { title },
                { new: true, runValidators: true }
            );

            if (!updatedSerie) {
                return res.status(404).json({
                    msj: "Series not found",
                    data: null
                });
            }

            res.status(200).json({
                msj: "title updated successfully 200 OK",
                data: updatedSerie
            });

        } catch (error) {
            res.status(500).json({
                msj: "server error",
                error: error
            });
            throw new Error(`${error}`);
        }
    }

    async delete(req, res) {
        const { id } = req.params;

        try {
            const deletedSerie = await ModelSeries.findByIdAndDelete(id);

            if (!deletedSerie) {
                return res.status(404).json({
                    msj: "Series not found",
                    data: null
                });
            }

            res.status(200).json({
                msj: "deleted successfully 200 OK",
                data: deletedSerie
            });

        } catch (error) {
            res.status(500).json({
                msj: "server error",
                error: error
            });
            throw new Error(`${error}`);
        }
    }
}

module.exports = {
    SeriesService
}