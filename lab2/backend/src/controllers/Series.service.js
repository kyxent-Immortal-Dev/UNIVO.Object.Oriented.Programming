const { Types } = require("mongoose");
const { ModelSeries } = require("../models/Series.model");


class SeriesService {
    
    
    async create(req, res){

        const {title, description, year , image, category} = req.body

        try {

            const serie = await ModelSeries.create( {title, description, year ,image,  category} )

            res.status(201).json({
                msj : "created successfully 200 OK",
                data : serie
            })
            
        } catch (error) {

            
            res.status(500).json({
                msj : "server error",
                error : error
            })

            throw new Error(`${error}`);
            
        }

    }

    async getAllByIdCategory(req, res) {

        const {id} = req.params

        try {
            
            const series = await ModelSeries.find({ category: id }).populate("category");

            res.status(200).json({
                msj : "get all series by category successfully 200 OK",
                data : series
            })

        } catch (error) {
            res.status(500).json({
                msj : "server error",
                error : error
            })
            throw new Error(`${error}`);
            
        }

    }

}


module.exports = {
    SeriesService
}